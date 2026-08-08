#!/usr/bin/env python3
"""Scan a bilingual director-journal JSX page for mechanical style violations."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


HARD_BANS = (
    "it is important to note that",
    "but here's the catch",
    "but here’s the catch",
    "this underscores the importance of",
    "in today's fast-paced world",
    "in today’s fast-paced world",
    "in conclusion",
    "to summarize",
    "let's delve into",
    "let’s delve into",
    "at its core",
    "game-changer",
    "uncharted waters",
    "embark on a journey",
)

RESTRICTED = (
    "leverage",
    "optimize",
    "enhance",
    "synergy",
    "pivotal",
    "groundbreaking",
    "cutting-edge",
    "innovative",
    "robust",
)


def line_number(text: str, offset: int) -> int:
    return text.count("\n", 0, offset) + 1


def scan(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8")
    lower = text.lower()
    errors: list[str] = []

    for match in re.finditer("—", text):
        errors.append(f"line {line_number(text, match.start())}: em dash")

    for phrase in HARD_BANS:
        start = lower.find(phrase)
        if start >= 0:
            errors.append(
                f"line {line_number(text, start)}: hard-banned phrase: {phrase!r}"
            )

    hits: list[str] = []
    total = 0
    for word in RESTRICTED:
        matches = list(re.finditer(rf"\b{re.escape(word)}(?:s|d|ing)?\b", lower))
        if matches:
            total += len(matches)
            hits.append(f"{word}={len(matches)}")
    if total > 2:
        errors.append("restricted-word total exceeds 2: " + ", ".join(hits))

    if "const EnglishArticle" not in text:
        errors.append("missing EnglishArticle")
    if "const JapaneseArticle" not in text:
        errors.append("missing JapaneseArticle")
    if "injectIntl" not in text and "intl.locale" not in text:
        errors.append("missing locale-aware page integration")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("post", type=Path)
    args = parser.parse_args()

    if not args.post.is_file():
        print(f"error: not a file: {args.post}", file=sys.stderr)
        return 2

    errors = scan(args.post)
    if errors:
        print(f"{args.post}: style check failed")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"{args.post}: style check passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
