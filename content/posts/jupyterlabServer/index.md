---
title: "Jupyter Lab Server"
date: "2022-07-02"
draft: false
categories: ['ML', 'Server', 'Python']
tags: ['ML','Server', 'Jupyterlab', 'Jupyter', 'pumo']
description: "PuMo: JupyterLab on a Server or VPS | A fast, easy way to create machine learning models."
sitemap_ignore: true
thumbnail: "jupyter.png" # Image in lists of posts.
---

![jupyter](jupyter.png)

## Run a Jupyter Lab server using Windows VPS

1. you need to buy a Windows VPS in order to have a server for Jupyter lab.
simply search it in google and find any VPS provider you like.

2. Install [anaconda](https://www.anaconda.com/ "anaconda") on the Windows Server

3. Open Anaconda prompt form windows search bar

4. type:

```python
conda create -n myenv python=x.x
```

simply put any name for your environment instead of myenv and define your python version which can be 3.8 or anything that is proper to your development requirement.

5. Activate the conda environment

```python
conda activate myenv
```

6. Install any library that you need, with CONDA command in anaconda prompt.

```python
conda install pandas
conda install jupyterlab
```

7. Generate a configuration file for Jupyter lab and Generate a password for authentication.

```python
jupyter lab --generate-config
jupyter lab password
```

8. Change directory with CD command to the project folder you want to work on.

9. then run the jupyter lab with below command

```python
jupyter lab --no-browser --ip "*" --port=8888
```

10. add port 8888 to the windows firewall inbound.

11. Enter your VPS ip address with port 8888 like ip:8888 into the browser, now you can access to the jupyter lab anywhere you like.