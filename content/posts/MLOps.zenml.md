---
title: "ZenML"
date: "2022-06-25"
draft: false
categories: [ML, AI]
tags: [ML,AI, MLOps, zenml]
---

## How can ZenML solve your problems? 

WEll, in companies which is working with ML stuff, there should be some automation or CI/CD.
I was searching for a solution to automate the ML pipelines and found zenml.

So in here, going to share my experience about zenml and how to use it.

in the website it said:

```python

$pip install zenml
$zenml go

```
and you can find below code in github:

```python

import numpy as np
from sklearn.base import ClassifierMixin

from zenml.integrations.sklearn.helpers.digits import get_digits, get_digits_model
from zenml.pipelines import pipeline
from zenml.steps import step, Output

@step
def importer() -> Output(
    X_train=np.ndarray, X_test=np.ndarray, y_train=np.ndarray, y_test=np.ndarray
):
    """Loads the digits array as normal numpy arrays."""
    X_train, X_test, y_train, y_test = get_digits()
    return X_train, X_test, y_train, y_test


@step
def trainer(
    X_train: np.ndarray,
    y_train: np.ndarray,
) -> ClassifierMixin:
    """Train a simple sklearn classifier for the digits dataset."""
    model = get_digits_model()
    model.fit(X_train, y_train)
    return model


@step
def evaluator(
    X_test: np.ndarray,
    y_test: np.ndarray,
    model: ClassifierMixin,
) -> float:
    """Calculate the accuracy on the test set"""
    test_acc = model.score(X_test, y_test)
    print(f"Test accuracy: {test_acc}")
    return test_acc


@pipeline
def mnist_pipeline(
    importer,
    trainer,
    evaluator,
):
    """Links all the steps together in a pipeline"""
    X_train, X_test, y_train, y_test = importer()
    model = trainer(X_train=X_train, y_train=y_train)
    evaluator(X_test=X_test, y_test=y_test, model=model)


pipeline = mnist_pipeline(
    importer=importer(),
    trainer=trainer(),
    evaluator=evaluator(),
)
pipeline.run()

```

lets check zenml go and see what we can find there,
here will be the out put

Tried:

```python

! pip install zenml
! zenml go

```
in google colab
and after long installation and running stuff

```python

|INFO|The Jupyter Notebook is running at:
|INFO|http://localhost:8888/

```

so how to run that localhost from google colab?! - as it said ZenML is available for easy installation into your environment via PyPI.

in order to go for the next step have to setup new conda enviroment for ZenML.


1.python and zenml code in github
2.AWS account
