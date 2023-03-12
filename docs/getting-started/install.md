---
sidebar_position: 1
id: install
title: Installation
---


## Mac install

1. [Clone the repo](https://github.com/flojoy-io/flojoy-desktop)
1. Make sure that you have Python, Redis, and Node already installed
1. `cd` into the project root
1. Install the required python packages: `pip install -r requirements.txt`
1. Install npm packages: `npm install`
1. Run `$ sh mac_startup.sh` (Flojoy does not run on Windows yet)

   - If you have `virtualenv` installed you can provide the path to the virtualenv folder as follows `sh mac_start_up.sh -v venv2`
   - You can provide optional argument `-r` which will shut down the existing redis server and spin up a fresh one

