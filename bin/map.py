#!/usr/bin/env python3

import os, json

lines = []

def parse_line(line):
    if '│' in line:
        line = line.replace('│', '')
    if '└──' in line:
        line = line.replace('└──', '')
    if '├──' in line:
        line = line.replace('├──', '')
    return (line.strip(), line.count(' '))

def traverse(num, tree):
    global lines
    name, depth = lines[num]
    next_name, next_depth = lines[num + 1] if num + 1 < len(lines) else ('', -1)
    if depth < next_depth:
        next_num, sub_tree, up_to = traverse(num + 1, { '__depth__': depth, 'files': [] })
        tree[name] = sub_tree
        while up_to and up_to == depth:
            next_num, tree, up_to = traverse(next_num, tree)
        return (next_num, tree, up_to)
    elif depth == next_depth:
        tree['files'].append(name)
        return traverse(num + 1, tree)
    else:
        tree['files'].append(name)
        return (num + 1, tree, next_depth)

def main():
    global lines
    os.system("tree public > .tree")
    with open('.tree', 'r') as tree_file:
        lines = list(filter(lambda x: x[0] != '', map(parse_line, tree_file.readlines())))[:-1]
    _, tree, _ = traverse(0, { '__depth__': -1 })
    with open('src/map.js', 'w') as map_file:
        map_file.write("const MAP_DATA = '" + json.dumps(tree['public']) + "';")
    return

if __name__ == '__main__':
    main()

