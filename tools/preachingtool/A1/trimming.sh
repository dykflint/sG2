#!/bin/bash
cat file | awk -F '\\-' '{print $1}'
