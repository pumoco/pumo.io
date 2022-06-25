---
title : "mt5.python"
slug : "mt5"
date : "2022-06-25"
categories: [mt5, python]
tags: [mt5,python]
---

## MT5 Python Market Close Evaluation

```python

symbol_time = mt5.symbol_info("XAUUSD").time

symbol_time = pd.to_datetime(symbol_time, unit='s')


(symbol_time.hour == 23)
(symbol_time.minute >= 30)
```

This code will check market watch time for a specific symbol, in most of time markets are clsoed at above time.
so the robot should stop trading.

this code could go to your while loop of the robot(AT).

as below:

```python
while True:
    symbol_time = mt5.symbol_info("XAUUSD").time
    symbol_time = pd.to_datetime(symbol_time, unit='s')
    
    if (symbol_time.hour == 23) and (symbol_time.minute >= 30):
        is_time = False
    else:
        do your trade
```


