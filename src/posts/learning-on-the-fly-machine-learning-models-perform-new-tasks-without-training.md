---
title: "Learning on the Fly: Machine Learning Models Perform New Tasks Without
  Training"
description: "AI Systems "
date: 2023-03-20T14:43:31.983Z
categories:
  - AI
reading_time: 5
image: /static/img/ai.jpg
---
Imagine someone who’s able to perform a complicated task with minimal prior experience. Or imagine someone executing a new task flawlessly without any training at all. While this is a rather unlikely scenario for us humans, it turns out it’s not so far-fetched for AI systems. 



In fact, a [new study](https://news.mit.edu/2023/large-language-models-in-context-learning-0207) from MIT, Stanford University, and Google Research suggests that machine learning models can learn to accomplish a new task without seeming to have learned, or been trained, to do so – a phenomenon known as “in-context learning.”



Large language models such as OpenAI’s GPT-3 and Google’s LaMDA are massive neural networks that can generate human-like text, from poetry to programming code. Trained using massive amounts of internet data, these machine-learning models take a small bit of input text and then predict the text that is likely to come next – essentially allowing them to create human-like texts and answers to questions. 



But researchers are finding that these models can also carry out tasks that they haven’t been specifically trained to perform. In other words, the systems can learn to reliably perform new tasks from only a few examples, essentially picking up new skills on the fly. Once given a prompt, the language model can take a list of inputs and outputs and create new, correct predictions about a task it hasn’t been explicitly trained for. 



For instance, someone could feed the model several example sentences and their sentiments (either positive or negative), then prompt it with a new sentence, and the model can give the correct sentiment. 



Typically, machine-learning models such as GPT-3 would need to be retrained with new data and updated parameters to tackle a new task. But with in-context learning, the model can handle a new task without updating its parameters, essentially learning a new task without learning anything new at all. 



“The researchers’ theoretical results show that these massive neural network models are capable of containing smaller, simpler linear models buried inside them,” MIT reported. “The large model could then implement a simple learning algorithm to train this smaller, linear model to complete a new task, using only information already contained within the larger model. Its parameters remain fixed.”



Ekin Akyürek, lead author of the [published paper](https://arxiv.org/abs/2211.15661), explained that a better understanding of in-context learning could lead to improved AI models that don’t require costly retraining. 



“Usually, if you want to fine-tune these models, you need to collect domain-specific data and do some complex engineering,” Akyürek said. “But now we can just feed it an input, five examples, and it accomplishes what we want. So, in-context learning is an unreasonably efficient learning phenomenon that needs to be understood.”



The study concludes that in-context learning could eventually be used to solve many issues machine learning researchers might face down the road. As Facebook AI Research scientist Mark Lewis said, this study is “a stepping stone to understanding how models can learn more complex tasks, and will help researchers design better training methods for language models to further improve their performance.”



While much remains to be learned, in-context learning is an exciting development and a further indication of technology’s seemingly limitless potential.