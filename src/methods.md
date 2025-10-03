---
layout: page.liquid
title: Methods
---
In undertaking the investigative data analysis I gathered a corpus of rhetoric and composition field journals from the 1990s. I utilize two methods drawn from the digital humanities, topic modeling and data visualization. This allows for a view of the corpus that is available at scale through distant reading and seeing trends over time through data visualization. I then use this scale to suggest places to read specific articles from the corpus to develop a historiography of *techne.* 

## Corpus
I gathered a corpus of nine field journals that serve rhetoric and composition and cover both broad developments in the discipline as well as more niche interests in pedagogy, creativity, and technology.

1. College Composition and Communication
2. College English
3. Computers and Composition
4. Journal of Advanced Composition
5. Journal for the Assembly for Expanded Perspectives on Learning
6. Kairos
7. Rhetoric Review
8. Rhetoric Society Quarterly
9. Writing on the Edge

The corpus was collected manually through web scraping for *Kairos*, *Computers and Composition*, and *JAEPL*, and through a Data-For-Research request through JSTOR for the remaining journals. The resulting data was then cleaned to put metadata and citations for each article into a common JSON format, and to prepare the full-text data for analysis. I used the general-purpose programming language Python and the tool Jupyter notebooks to develop the data cleaning, analysis, and visualization programs and to annotate their function.

## Topic Modeling and Data Visualization
Topic modeling is a computational approach to natural language processing. Through a combination of computational power and statistical analysis, topic modeling generates a list of highly plausible topics that can be inferred and read in relationship to a corpus. Clay Templeton argues that it can be used as a form of distant reading where identification of topics emerge from texts in response to a subjective reading of the generated lists of words (Templeton). (Demonstrate the topic model briefly)

Data visualization are processes for transforming data into visual forms that can more easily be read and comprehended, especially for a broad audience. For Krista Kennedy and Seth Long, data visualization offers new ways of examining the material traces of concepts such as techne within scholarship which “can benefit from large textual data sets” through its ability to develop a “more complex view that is simply not possible to attain at a smaller scale” (Kennedy and Long 2015, 142).

Once the corpus was prepared for analysis, I used the tool *Mallet* to develop topic models drawn from the text of the corpus. Topic models are a form of distant reading that weighs two things in its analysis: how frequently words appear near each other across the entire corpus, and then how frequently those groupings of words may be found within a particular document. It makes an assumption that meaning can be inferred through these groupings of words as drawn from a corpus, and that these groupings suggest the content of any particular document by examining the statistical distribution of topics within individual documents. While topic modeling is not a perfect representation of keyword relationships—because it cannot discern the meaning or usage of the terms, only their frequency within documents alongside the other words in the same topic—using this method has enabled me to infer topical relationships around *techne* based on the likelihood or rarity of particular words occurring together in various combinations across this corpus.

I then cross referenced and visualized the topics utilizing Pender’s five composite definitions of *techne*, reading to match and highlight any that aligned with any one of the composition definitions. Topic modeling provides statistical weights for the appearance of each topic within every document of the corpus which I used to generate visualizations. I created these visualizations using the programing language Python along with the open source libraries Bokeh and Pandas. This particular visualization is of the mean weights for identified topics found within a snapshot of the corpus comprised of documents that included the word “invention.” I used these visualizations to “see” the topic models and to search for places where impressions of *techne* could be found within documents and can trace its absences through the scholarship of the decade through these impressions. The investigative data analysis was then used to suggest areas for closer reading and recovery based out of the corpus, examining individual articles for the impressions of *techne*. 

<div class="inline_nav">
<p><a href="/michael.healy/methodology/">Previous</a>|<a href="/michael.healy/results/">Next</a></p></div>