## The PLOTLY_DATASET app

The workflow of this app is described below:

[PLOTLY_DATASET](https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SAMPLE_DATASET/PLOTLY_DATASET/PLOTLY_DATASET.py) : This is a Plotly Dataset node. It takes one parameter  `dataset_key`, the name of dataset to load from plotly sample datasets. In this case it is 'wind' which is default value of this parameter. It passing a DataContainer class of an `dataframe` with `m` key e.g `DataContainer(type='dataframe, m=df)` to the next node `Table`.

[TABLE](https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/TABLE/TABLE.py): This node creates a Plotly table visualization for a given input `DataContainer` 'dataframe' type.

[TERMINATE](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/TERMINATORS/END.py): This node terminating the current script run. The output of this node is same as its parent node.
