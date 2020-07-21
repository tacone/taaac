# <em><strong>TAAAC !</strong></em>

<em><strong>taaac!</strong>&nbsp;</em> is a starting skeleton for
new projects.

We use a modular docker-compose structure, to allow easy inclusion, exclusion,
duplication of existing modules.

A module consists usually of two files:

- `docker-compose.yml`
- `docker-compose.dev.yml`

Those files will be included by a starting script.

## Features

- very simple
- modular
- explicit
- a customizable starting script for each environment
- we avoid custom images as much as possible, so you don't have to
  build yourself

## Wishlist

- make it easy to update in a existing project

## Intended use

Prototyping and small to medium projects.

## Installation

- Make sure you have _docker_ and _docker-compose_ installed.
- clone this repository
- cd in the repository directory

Then type:
`scripts/dev up`

## Usage

The scripts inside `scripts/` are meant to be customized to suit different servers/environments. Feel free to duplicate them if you
need to diversify even more.

Each one is meant to be used just as you would use `docker-compose`.

For example: `scripts/dev up`, `scripts/dev logs`, `scripts/dev ps`
and so forth.
