---
title: "Open access repositories start to offer overlay peer review services"
date: 2016-03-31
kind: news
image: "/media/2016/03/OPRM_logo.jpg"
categories:
  - "blog"
---

**Converting open access repositories into functional evaluation platforms**
**Bringing back quality control to the scientific community**

The use of journal hierarchy for assessing the reputation of research works and their authors, has contributed to a competitive environment that is having a detrimental effect on scientific reliability. Open access repositories administered by Universities or research organizations are a valuable infrastructure that could support the transition to a more collaborative and efficient scholarly evaluation and communication system. [Open Scholar](http://www.openscholar.info/) has coordinated a consortium of six partners to develop the first Open Peer Review Module (OPRM) for institutional repositories. The module integrates an overlay peer review service, coupled with a transparent reputation system, on top of institutional repositories. It is provided freely as open source software: <https://github.com/arvoConsultores/Open-Peer-Review-Module/wiki>

**How it works**
The OPRM allows an unlimited number of reviewers to evaluate any research work (preprints, published articles, presentations, conference outputs, datasets, book chapters and books, working papers, reports, and so on). Reviewers can either be invited through the system (for example following the request by an author) or can volunteer to review any object of the repository. In both cases, reviewers receive the review request details by email and are asked to offer their reports within a specified deadline. After this process is completed, the review generates a new item on the repository, which is linked to the original research work and becomes openly accessible and citable.
By volunteering, any researcher can become a reviewer in the system whether affiliated to the repository’s institution or not. Τhe module displays the name and affiliation of the reviewer in order to prove that she is a qualified person to review a particular scientific work. In addition to reviewing research works, reviewers will be asked by the system to also evaluate previous reviews of each work they review. An advanced search function allows repository users to filter or sort research works based on their reputation or the number of positive reviews.
Technically, the module was developed by DSpace provider [ARVO](http://arvo.es) and implemented on two major Spanish institutional repositories, [Digital-CSIC](https://digital.csic.es/) (JSPUI DSpace-CRIS v4.3) and [e-IEO](http://www.repositorio.ieo.es/e-ieo/) (DSpace XMLUI v5) taking into consideration that both repositories have advanced author’s data-models. Invitation and Review Modules have been developed as an extension of the workflow and submission capabilities of Dspace. Important to notice, the reputation algorithms were developed as separate plugins, allowing their easy adaptation to other reputation models.
 
**The reputation assessment model**
The reputation assessment model, developed by the [Artificial Intelligence Research Institute (IIIA)](http://www.iiia.csic.es/) of the Spanish National Research Council (CSIC) in Catalonia, is based on peers evaluating not only each other's research works but also each other's reviews. Evaluating other reviews allows for scaling the importance of each review on the overall assessment of a research work, based on the reputation of the reviewer. We note that the model assumes that evaluations may be performed on a number of dimensions (e.g. originality, technical soundness, predicted impact, etc.), however, an “overall quality” dimension is needed for computing the general reputation of the research work. This is because aggregating the reputation for all dimensions into a single index may depend on a number of issues that are outside the scope of this work.
In brief, the model quantifies a reputation for any research work hosted by the repository, authors, reviewers, and reviews. The reputation of a work is the weighted aggregation of the reviews it receives, where the weight depends on the reputation of the reviewer (discussed below). A single metric is provided for each evaluation dimension: overall quality, expected impact in the field, expected impact for society, etc. A scholar’s reputation as an author is an aggregation of the reputation of her papers. Again, this reputation is computed for each dimension separately. The reputation of a reviewer is essentially a weighted aggregation of the opinions over her reviews by other reviewers who evaluated the same research works. The weight in this case is the reputation of reviewers who offer an opinion. Finally, the reputation of a review is similar to the one for works, but using opinions instead of reviews.
 
**Benefits for repositories**
**Quality control through enhanced evaluation:** Common open access repositories already offer different, mostly quantitative, metrics like the number of visits and downloads. Those metrics are however limited in terms of giving a reliable idea about the quality of a research output. The OPRM allows peers to explicitly evaluate hosted research items and combines judgements and metrics in a more meaningful way to evaluate their quality and relevance.
**Open and transparent:**By following the ‘openness’ paradigm, this system is open and transparent: the reviews and full texts will be available alongside the primary publications. The identity of the reviewers will be disclosed to the authors as well as to the public. This enhances accountability and allows to officially credit the review process.
**Crediting Reviews:** In order to give reviews a place in the scientific reputation system and to allow scaling the importance of each review, the module offers a reputation engine that takes into account different metrics.
 
**Official launch and workshop**
The OPRM will be officially presented on the 27th of April in the CSIC Royal [Botanic Garden](http://www.rjb.csic.es/jardinbotanico/jardin/?len=en) [in Madrid](http://www.rjb.csic.es/jardinbotanico/jardin/?len=en). The purpose of this meeting is to demonstrate the module to representatives from Spanish repositories and research libraries, the European Commission and the OpenAIRE consortium, publishers, and researchers across all scientific areas. We consider that integrating peer review with existing open access repositories can help address many of the issues related to the current journal-based reputation system, as well as to offer scholars further incentives to self-archive their work in order to be openly discussed and evaluated by expert peers.
 
More information about the event:
<http://proyectos.bibliotecas.csic.es/digitalcsic/oprm/index_eng.html>
Read the announcement at the OpenAIRE blog:
<https://blogs.openaire.eu/?p=775>
 
For more information about the module and to install it on your own repository please [contact us](http://www.openscholar.info/contact/).
