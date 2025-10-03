# Bokeh Visualizations Topics
This notebook is for exploratory visual analysis using Bokeh of the topic models


```python
import pandas as pd
from bokeh.plotting import figure, output_file, show
from bokeh.models import ColumnDataSource, DataTable, TableColumn
from bokeh.models.tools import HoverTool
from bokeh.transform import factor_cmap, factor_mark, linear_cmap, jitter
from bokeh.io import output_notebook
import colorcet as cc
import numpy as np
import xlsxwriter

from bokeh.palettes import viridis

import csv
from pathlib import Path
```

## Set Up Spaces and Load Data
These set the working folder, name the topic files, and name the key file. It also sets up the way in which Bokeh will display the data, in this case it is outputting into this notebook. This run of the topic modeling created 50 topics from the invention keyword search.


```python
working_folder = Path.home() / ("syncthing/Dissertation/dissertation_data/dissertation_data_working_folder/topic_modeling")

topic_file = Path(working_folder / ('invention_by_year.csv'))
key_file = Path(working_folder / ('invention_keys_filtered.csv'))

output_notebook()

topics = pd.read_csv(topic_file)
keys = pd.read_csv(key_file)

inv_mentions = topics.groupby("year")["filename"].count().reset_index(name="count")
#keys_list = keys['topic'].tolist()
```



<div class="bk-root">
    <a href="https://bokeh.org" target="_blank" class="bk-logo bk-logo-small bk-logo-notebook"></a>
    <span id="1002">Loading BokehJS ...</span>
</div>




## Data Tables
This is a representation of data tables from the dataset.


```python
table_source = ColumnDataSource(inv_mentions)

table = figure(width=720, x_minor_ticks=2)

colors=viridis(10)
color_map = linear_cmap(field_name='year', palette=colors, low=1990, high=1999)

table.vbar(x='year', top='count',source=table_source, width=0.70, color=color_map)
table.title.text = 'Documents Containing "Invention" per year'
table.xaxis.axis_label = 'Year'
table.yaxis.axis_label = 'Article Count'
table.xaxis[0].ticker.desired_num_ticks = 10
table.xaxis[0].ticker.num_minor_ticks = 0
hover = HoverTool()
hover.tooltips=[
    ('Year', '@year'),
    ('Count', '@count')
]

table.add_tools(hover)
show(table)
```








<div class="bk-root" id="575346b1-974a-4cc0-9eb9-f33e6a004c57" data-root-id="1004"></div>





## Prepare data for visualizations
- This block makes a list of the entires within the dataframe available to Bokeh for visualizations
- This block removes all low significance match values from the topic models (less than 5%)


```python
column_list=['1','2','9','10','11','12','13','14','16','17','22','25','26','30','38','40','42','45','47']
#column_list = []
#for i in range(50):
#    i = str(i)
#    column_list.append(i)

for column in column_list:
    values = topics[column].values
    mask = values < 0.05
    values[mask] = np.nan
    topics[column] = values
```

This block groups the means together an exports an Excel file which contains the means, minumum, and maximum weight values for each topic for each year


```python
column_list.append('year')
topics_min = topics[column_list].groupby(['year']).min()
topics_max = topics[column_list].groupby(['year']).max()
topics_mean = topics[column_list].groupby(['year']).mean()

output_excel_file = Path(working_folder / ('invention_filtered_topics.xlsx'))

writer = pd.ExcelWriter(output_excel_file, engine = 'xlsxwriter')
topics_mean.to_excel(writer, sheet_name="Mean")
topics_min.to_excel(writer, sheet_name="Min")
topics_max.to_excel(writer, sheet_name="Max")
writer.save()

column_list.remove('year')
```

These next two blocks set up the scatter plot and tabular data


```python
topics = topics.groupby(['year']).mean()
topics = topics.reset_index()
source = ColumnDataSource(topics)
```


```python
keys_source = ColumnDataSource(keys)

columns = [
    TableColumn(field="key", title="Key"),
    TableColumn(field="interpretation", title="Subjective Reading"),
    TableColumn(field="topic", title="Topics"),
    ]
data_table = DataTable(source=keys_source, index_position=None, columns=columns, autosize_mode='fit_viewport')
```

## Visualizations
Below are interactive visualizations from the dataset


```python
p = figure(output_backend="webgl", width=800, height=1000)

color = cc.glasbey

i = 0
    
for column in column_list:
    x=jitter('year', 0.5)
    p.scatter(x=x, y=column, source=source, color=color[i], size=10, name=column, muted_color=color[int(column)], muted_alpha=0.2, legend_label=column)
    p.line(x=x, y=column, source=source, color=color[i], line_width=2, name=column, muted_color=color[int(column)], muted_alpha=0.2, legend_label=column)
    i +=1
   
p.xaxis.axis_label = "Year Published"
p.yaxis.axis_label = "Topic Mean"
p.xaxis[0].ticker.desired_num_ticks = 10
p.xaxis[0].ticker.num_minor_ticks = 0
p.title = "Invention Topic Means per Year > .05"

p.legend.location = "right"
p.legend.click_policy="mute"

legend = p.legend[0]

hover = HoverTool()
hover.tooltips=[
    ('Year', '@year'),
    ('Topic Key', '$name'),
    ('Topic Match', '@$name{0.0000}')
]

p.add_tools(hover)
p.add_layout(legend, 'right')
output_graph = Path(working_folder / ('invetion_techne_visualization.html'))
output_file(output_graph)
show(p)
output_table = Path(working_folder / ('invention_techne_datatable.html'))
output_file(output_table)
show(data_table)
```








<div class="bk-root" id="f277ecda-5c2b-42d5-bf8b-03dcb3d3d591" data-root-id="1120"></div>












<div class="bk-root" id="586f5b15-5228-4b55-b827-2e5c2da2450c" data-root-id="1117"></div>






```python

```
