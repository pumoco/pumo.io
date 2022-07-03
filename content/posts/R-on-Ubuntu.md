---
title: "How to Install R on Ubuntu"
date: "2022-07-04"
categories: ['ML', 'Ubuntu', 'R']
tags: ['Ubuntu','R','pumo']
description: "PuMo: How to Install R on Ubuntu | This tutorial teaches you to install R on Ubuntu."
sitemap_ignore: true
---

## How to Install and Use R on Ubuntu

1. Installing R on Ubuntu

```BashSession
sudo apt install r-base
```

2. Interactive Mode in R:

```BashSession
R
```

now you can test some code:

```BashSession
> 25+25
[1] 50

> print ("Hello World!")
[1] "Hello World!"
```

You can quit using q() or pressing CTRL+c.

3. Use R by using RStudio - Download [rstudio](https://www.rstudio.com/products/rstudio/download/ "rstudio")

## Jupyter Notebook

1. Install R in Jupyter Notebook:

```python
conda install -c r r-irkernel
```

2. launch Jupyter Notebook

```python
jupyter notebook
```

3. Create a new Notebook and select ‘R‘ from the drop-down list.