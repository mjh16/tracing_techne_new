---
layout: page.liquid
title: Methods
---
I used two primary methods for the investigative data analysis in this project, topic modeling and data visualization. I then paired this investigate data analysis with more the traditional method of critically reading identified articles to examine their historiographic impact. This  tacking in/tacking out approach to the data and underlying articles is inspired by Kirsch and Royster ’s feminist rhetorical practices. This feminist rhetorical practice is undertaken to approach the flattening effects of data, and to examine the underlying people and their work behind the trends.

## **Why this Corpus**

The selected corpus is a combination of major journals in the field with a selection of more specialized journals where intersections of *techne* and invention may be located.

1.	Rhetoric Review
2.	Rhetoric Society Quarterly
3.	College Composition and Communication
4.	College English
5.	Journal of the Assembly for Expanded Perspectives on Learning
6.	Kairos
7.	Journal of Advanced Composition
8.	Computers and Composition
9.	Writing on the Edge

The corpus consists of nine journals commonly identified as serving the discipline of rhetoric and composition. These journals were selected based on three factors: together they reflect the broad scope of the field, ranging from composition studies, rhetorical theory and practice, and computers and writing; individually, they each have large and diverse readerships; and each one is guided by a particular focus, some of them more attuned to technology and writing than others. These journals also contain many of the disciplinary uptakes of the history of the social turn and the application of critical theory and postmodernism to rhetorical theory and practice and the teaching of composition. Together these journals represent a range of interests, from the digitally and rhetorically focused web texts of *Kairos* to the field-specific concerns represented within *College Composition and Communication*. They also are locations where discussions that have shaped discussions of the history and theory of *techne* have been taken up in current scholarship. These journals also provide one perspective of the field due to their circulation and variety of focuses and they all work undergo changes during the decade in response to professionalizing disciplinary pressures, changes due to computers and web technology, and through contextualizing the discipline after the social turn. Collectively they have a reach to the discipline at large, and they provide a scope to capture large movements and more narrow concerns within conversations and scholarship of the period. As all nine are still actively published, they represent continued concerns and the evolving knowledge of the discipline.

## **Tacking Out - Distant Reading**

I first examine the corpus through distant reading via topic modeling and data visualization. This process allows for a high-level overview of trends within the corpus and serves as a first place to examine impressions of *techne*. 

## **Topic Modeling**

My chosen method conducting investigative data analysis is topic modeling. Topic modeling is a form of natural language processing that statistically calculates the relevance of topics within a corpus of textual data. To generate the topic models I used the program MALLET which utilizes a Latent Dirichlet Allocation(LDA) as the algorithm to generate the topics. Through a combination of computational power and statistical analysis, a topic model generates a list of highly plausible topics that can be inferred and read in relationship to a corpus as a form of distant reading in which topics emerge from texts in response to a subjective reading of the generated lists of words. Table 1 provides a selection of topics from the corpus identified as aligning with a compound definition of *techne*. Each topic has a weight value indicating how strongly each bundle of words may be found across the corpus. For example, if one word is found within a document, a grouping with a stronger weight will tend to also include the remaining words. There is then the list of words. And finally is my subjective reading of the topic.

<figure>
<table>
    <tr>
        <th>Key</th>
        <th>Weight</th>
        <th>Topic</th>
        <th>Interpretation</th>
    </tr>
    <tr>
        <td>1</td>
        <td>0.46233</td>
        <td>social language community discourse process knowledge texts context sense individual theory meaning view thinking understanding people ways nature text invention</td>
        <td>discourse, community, and context</td>
    </tr>
    <tr>
        <td>9</td>
        <td>0.90479</td>
        <td>theory discourse question point terms fact argument view make position kind makes simply discussion claim essay practice problem claims rhetoric </td>
        <td>discourse, theory and argument, essay</td>
    </tr>
    <tr>
        <td>25</td>
        <td>0.66551</td>
        <td>form time work words made early number long general set development ideas rhetorical sense history process system found based present</td>
        <td>time and work</td>
    </tr>
    <tr>
        <td>30</td>
        <td>0.40334</td>
        <td>students writing student teachers teaching classroom class college teacher composition english writers paper write reading work learning process teach writer</td>
        <td>students, teachers, writing</td>
    </tr>
    <tr>
        <td>42</td>
        <td>0.55413</td>
        <td>life power political society good american york public audience time language world moral speech character history great sense action state </td>
        <td>life, power, speech, and society</td>
    </tr>
</table>
<figcaption>Table 1: Top 5 weighted topics excerpted from total identified topics. Full table in Appendix A.
</figcaption>
</figure>

Topic modeling is potentially fruitful for rhetorical study as the topics themselves hold no innate meaning, they are just a jumble of words that tend to be found together, but can be read to infer topics and relationships. By examining Table 1 we can see how a subjective reading of the topics could align with one of Pender’s five composite definitions of *techne.* 

But topic modeling is not without its cautions because it inherently separates the text from its context and offers a view of the construction of the corpus that could be seen as totalizing. Benjamin M. Schmidt, in a 2012 special issue of *The Journal of the Digital Humanities* on topic modeling, offers a rich discussion of the affordances and limitations of topic modeling for humanistic research. By focusing on the shortcomings (along with the potential) he notes that “whatever uses humanists find for topic models, in the end they must integrate the models with a close understanding of the constituent words; and only by returning to describe changes in words can they create meaning.” While topic modeling is not a perfect representation of keyword relationships—because it cannot discern the meaning or usage of the terms, only their frequency within documents alongside the other words in the same topic—using this method has enabled me to infer topical relationships around *techne* based on the likelihood or rarity of particular words occurring together in various combinations across this corpus.

## **Data visualization**

I then took these topic models and visualized them by year and mean weight using the programming language Python by transforming the data using Pandas and visualized using Bokeh, two different libraries for use within Python. By considering the rhetorical interplay between data visualization, computational analysis, and the underlying data we can inquire into meaning at scale, and to consider how large collections of text make and support meaning for communities. If we assume that backing for disciplinary and community knowledge can be found within the documents of a group, by combining the reading of topics the charting of the results in tables and graphs, data visualization offers a means of seeing impressions of topics within corpora and on individual documents, to see how the corpora changes over time, and to infer relationships between communities and the texts they produce, circulate, and consume. 

<figure>
<img src="../img/invention_by_year_filtered.png" alt="Line graph in multiple colors that shows _techne_ impressions by year. The graph is labeled 1990-1999 on the horizontal axis and 0.0 to 0.5 on the vertical axis. Five lines on the graph are labeled">
<figcaption>Figure 1: Annotated example of this visualization with different topics arranged by different colored lines. This visualization offers a distant reading perspective of the corpus through the abstraction into visualized trends. This visualization was then read to look for patterns associated with compound definitions.
</figcaption>
</figure>

## Tacking In - Historiographic Analysis

I then cross-referenced the identified topics from the visualization with the constituent articles most strongly associated with that topic. An excerpt of this table is available in \[Table 2\]. As you can see, the topics with sharp peeks in the visualization are associated with a small number of articles, whereas the more consistent horizontal lines are less strongly associated with a larger number of articles. These articles were then collected and read for how impressions of *techne* may be found within them.

<div class="inline_nav">
<p><a href="/michael.healy/methodology/">Previous</a>|<a href="/michael.healy/results/">Next</a></p></div>