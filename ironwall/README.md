# Ironwall — Interactive Edition

## Requirements
macOS · Python 3.10+ · pygame (`pip install pygame`)

## Run
```
python ironwall.py
```

## Controls

### Setup phase
| Input | Action |
|-------|--------|
| Click a button | select that defender type |
| 1 / 2 / 3 keys | also selects defender type |
| Click green zone | place selected defender |
| Delete | remove last placed defender |
| Return | start battle (need at least 1) |

### Battle phase
| Input | Action |
|-------|--------|
| Space | fire catapult bolt (3 shots) |
| R | restart after win/lose |

## Tips
- Defenders attack enemies passing through their range
- Enemies that survive reach the castle and attack it
- Archer has the longest range — place them to cover the most ground
- Warrior hits hardest — place them where enemies will be densest
- You need at least 2–3 defenders to have a chance
