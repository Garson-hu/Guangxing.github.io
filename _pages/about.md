---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I'm a PhD student in Computer Science at North Carolina State University, working in the <a href='https://systems.csc.ncsu.edu/'>NCSU Systems Lab</a> with <a href='https://arcb.csc.ncsu.edu/~mueller/'>Prof. Frank Mueller</a>. Before NC State, I received my M.S. from the Wuhan National Laboratory for Optoelectronics (<a href='http://english.wnlo.hust.edu.cn/'>WNLO</a>) at Huazhong University of Science and Technology (HUST), advised by <a href='http://idsm.wnlo.hust.edu.cn/index.htm'>Prof. Ke Zhou</a>, and my B.Eng. from Hainan University.

My research focuses on systems for HPC and AI workloads, especially the memory and storage hierarchy:
- **Checkpointing and fault tolerance**: offloading checkpoint data movement for large-scale training and HPC to SmartNICs (DPUs).
- **Deep learning I/O**: multi-tier caching that serves training data from the fastest of memory, local NVMe, and parallel file systems.
- **Memory tiering**: managing heterogeneous memory, including CXL memory and persistent memory.

# 🌎 Motto
- 读万卷书 行万里路
- Gain wisdom through reading and broaden horizons through travel.
<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

# 🔥 News
- *2025.12*: &nbsp;🏆 Our work **FitCache** has been accepted to **IPDPS 2026**. See you in New Orleans!
- *2025.10*: &nbsp;🎉 Passed the PhD Written Preliminary Exam. Thanks to everyone for the support!
- *2024.10*: &nbsp;🏆 Poster accepted at **SC 2024**. Looking forward to presenting in Atlanta.
- *2023.08*: &nbsp;🎓 Started my PhD journey at NC State University!

# 📖 Educations
- *08/2023 – Present*, **North Carolina State University**, Raleigh, USA  
  Ph.D. candidate in Computer Science (Advisor: Prof. Frank Mueller)  

- *09/2019 – 06/2023*, **Huazhong University of Science and Technology**, Wuhan, China  
  M.Sc. in Computer System Architecture  
  - **Thesis**: Research on Performance Anomaly Detection and Root Cause Analysis for Storage Systems in Data Centers  
  - **Advisor**: Prof. Ke Zhou  
  - **Focus**: Data Center, Storage System, Anomaly Detection, Root Cause Analysis, Machine Learning  

- *09/2015 – 06/2019*, **Hainan University**, Haikou, China  
  B.Eng. in Computer Science and Technology  

# 📝 Publications 

<!--<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

\* These authors contributed equally to this work.

1. [Guangxing Hu](https://scholar.google.com/citations?user=j8Yq5W8AAAAJ&hl=en), Awais Khan, Christopher zimmer, Michael Brim, Frank Mueller.  
   **"FitCache: A Transparent Drop-In Framework for Multi-Tier Caching to Accelerate Distributed Deep Learning Workloads."**  
   *IPDPS 2026, New Orleans, USA.*

1. [Guangxing Hu](https://scholar.google.com/citations?user=j8Yq5W8AAAAJ&hl=en), Awais Khan, Frank Mueller.  
  **"A Zero-Copy Storage with Metadata-Driven File Management Using Persistent Memory."**    
  *SC Poster, 2024, Atlanta, USA.*

1. Yu Liu, Yunchuan Guan, Tianming Jiang, Ke Zhou, Hua Wang, [Guangxing Hu](https://scholar.google.com/citations?user=j8Yq5W8AAAAJ&hl=en), Ji Zhang, Wei Fang, Zhuo Cheng, Ping Huang.  
   **"SPAE: Lifelong Disk Failure Prediction via End-to-End GAN-based Anomaly Detection with Ensemble Update."**  
   *Future Generation Computer Systems, 2023.*

1. Yanzhao Xie\*, [Guangxing Hu](https://scholar.google.com/citations?user=j8Yq5W8AAAAJ&hl=en)\*, Yu Liu, Zhiqiu Lin, Ke Zhou, Yuhong Zhao.  
   **"How Visual Chirality Affects the Performance of Image Hashing."**  
   *Neural Computing and Applications, 2022.*

1. Yangtao Wang, Yanzhao Xie, Lisheng Fan, [Guangxing Hu](https://scholar.google.com/citations?user=j8Yq5W8AAAAJ&hl=en).  
   **"STMG: Swin transformer for multi-label image recognition with graph convolution network."**  
   *Neural Computing and Applications, 2021.*


# 🎖 Honors and Awards
<ul style="list-style: none; padding: 0;">
  <li>
    <span style="display: inline-block; width: 85%;"><b>National Grand Prize of Massive Storage Algorithm Competition</b></span>
    <span style="float: right;"><i>2023</i></span>
  </li>
  <li>
    <span style="display: inline-block; width: 85%;"><b>Academic Scholarship of Huazhong University of Science and Technology</b></span>
    <span style="float: right;"><i>2019–2022</i></span>
  </li>
  <li>
    <span style="display: inline-block; width: 85%;"><b>Grand Prize, Group Programming Ladder Tournament, China Collegiate Computing Contest</b></span>
    <span style="float: right;"><i>2018</i></span>
  </li>
  <li>
    <span style="display: inline-block; width: 85%;"><b>The Principal Scholarships of Hainan University (Top 2%)</b></span>
    <span style="float: right;"><i>2018</i></span>
  </li>
  <!-- <li>
    <span style="display: inline-block; width: 85%;"><b>The Most Innovative and Outstanding Student Award of Hainan University</b></span>
    <span style="float: right;"><i>2018</i></span>
  </li>
  <li>
    <span style="display: inline-block; width: 85%;"><b>The Second Scholarships of Hainan University</b></span>
    <span style="float: right;"><i>2016, 2017</i></span>
  </li> -->
</ul>



<!--# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)-->

# 💻 Internships
- *2025.06 - 2025.08*, [Oak Ridge National Laboratory (ORNL)](https://www.ornl.gov/), Oak Ridge, TN, USA.  
Designed FitCache, a multi-tier caching system for accelerating deep learning training. Implemented coordinated caching across memory and storage tiers to reduce data access latency, and evaluated the system at world-leading supercomputer Frontier. This work was presented at IPDPS 2026.


- *2024.06 - 2024.08*, [Oak Ridge National Laboratory (ORNL)](https://www.ornl.gov/), Oak Ridge, TN, USA.  
Extended the HVAC deep learning caching framework with a Persistent Memory–based cache tier, enabling zero-copy access via DAX. Deployed and debugged the system on Frontier and ARC clusters, addressing MPI and runtime issues across environments. Achieved preliminary I/O performance improvements and presented the work in an SC 2024 poster.

# 💬 Talks
- *2025.08*, Leveraging Memory Hierarchies for Scalable Caching in Deep Learning I/O on HPC Systems, Oak Ridge, TN, USA. 

<!-- ===== Projects (1-2 images + medium text) ===== -->
<style>
  .proj2 { display:flex; gap:18px; align-items:flex-start; margin:36px 0 44px; }
  .proj2 .media { width:38%; min-width:280px; display:flex; flex-direction:column; gap:10px; }
  .proj2 .media img{
  width:100%;
  height:auto;
  object-fit:contain;
  background:#fff;
  border-radius:10px;
  box-shadow:0 2px 10px rgba(0,0,0,.08);
  }

  .proj2 .media img.img-wide{
    height:360px;
  }

  .proj2 .media img.img-tall{
    max-height:480px;
  }
  .proj2 .media .small { height:140px; }
  .proj2 .content { width:62%; }
  .proj2 h3 { margin:0 0 6px; font-size:1.25rem; }
  .proj2 .meta { color:#666; font-size:.95rem; margin:0 0 10px; }
  .proj2 .desc { margin:0 0 10px; line-height:1.45; }
  .proj2 ul { margin:8px 0 10px 18px; }
  .proj2 li { margin:4px 0; }
  .proj2 .links a { display:inline-block; margin-right:10px; margin-top:6px; padding:6px 10px; border-radius:10px; background:#111827; color:#fff; text-decoration:none; font-size:.9rem; }
  .proj2 .links a.secondary { background:#374151; }
  .proj2 .links a.light { background:#e5e7eb; color:#111827; }
  /* wide figures: image spans the card, text below */
  .proj2.proj2-wide { flex-direction:column; }
  .proj2.proj2-wide .media, .proj2.proj2-wide .content { width:100%; }
  @media (max-width: 900px) { .proj2 { flex-direction:column; } .proj2 .media, .proj2 .content { width:100%; } }
</style>

# 🔖 Projects


<div class="proj2 proj2-wide">
  <div class="media">
    <img src="/images/projects/CXL/overview.png" alt="(a) Bulk writes to DRAM cut a co-located DRAM reader from 68.6 to 10.9 GiB/s, while redirecting them to CXL restores 68.6 GiB/s; (b) a unified DRAM/CXL manager with future-value admission, an interference guard, and placement, retention, and movement decisions">
  </div>

  <div class="content">
    <h3>Unified DRAM/CXL Memory Management</h3>
    <p class="meta">In progress · Interference-aware tiering for LLM serving and training</p>

    <p class="desc">
      LLM serving and training produce bulk writes, such as KV-cache blocks and checkpoints, that can saturate DRAM write bandwidth and starve co-located readers. Instead of throttling these writers, this project treats CXL memory as an independent, writable memory pipe: bulk writes land on CXL by default, and DRAM and CXL are managed as one pool with separate capacity and write-bandwidth budgets. The prototype runs on real CXL hardware (Micron CZ120 memory expanders).
    </p>

    <ul class="meta">
      <li><b>CXL-first write path:</b> bulk writes go to a CXL-resident segment store; DRAM is borrowed only when a latency probe shows headroom, the loan can be revoked at no cost, and data drains to NVMe without passing through DRAM</li>
      <li><b>Interference guard:</b> an online, SLO-safe DRAM write budget with arbitration across concurrent writers such as checkpointing and KV-cache traffic</li>
      <li><b>Reuse awareness:</b> placement, retention, and movement follow each block's future value versus its movement cost; a self-labeled admission filter learns which new KV-cache blocks are not worth storing</li>
    </ul>

    <p class="meta">
      <b>Results so far:</b> alongside a moderate co-located workload, the CXL-first write path is <strong class="meta-strong">3×</strong> faster than throttling and causes <strong class="meta-strong">4–10×</strong> less interference than DRAM staging; it halves PyTorch DCP async_save blocking next to an Adam optimizer (<strong class="meta-strong">1.6 s</strong> to <strong class="meta-strong">0.8 s</strong>); and the admission filter beats SLRU on two real traces while cutting cache write traffic by <strong class="meta-strong">over two-thirds</strong>.
    </p>
  </div>
</div>


<div class="proj2 proj2-wide">
  <div class="media">
    <img src="/images/projects/DPUBridge/overview.png" alt="DPUBridge overview: (a) architecture with the control layer on the host and the data layer on the DPU; (b) workflow with one-time region setup and a descriptor-based hot path">
    <!-- optional 2nd image -->
    <!-- <img class="small" src="/images/projects/dpurelaybridge/flow.png" alt="Control and data plane flow"> -->
  </div>

  <div class="content">
    <h3>DPUBridge</h3>
    <p class="meta">Under review · DPU-driven checkpoint relay over GVMI and RDMA</p>

    <p class="desc">
      DPUBridge takes the repeated checkpoint data path off the host CPU. The checkpoint framework still decides what to save and when, while the DPU reads checkpoint data straight from host memory and relays it over RDMA to a peer node. The peer places an off-node recovery copy in remote host memory and lazily flushes it to NVMe.
    </p>

    <ul class="meta">
      <li><b>Register once, reuse every checkpoint:</b> each checkpoint region is exposed to the DPU once through a cross-GVMI memory key (CGMK) alias; later checkpoints submit only compact (region, offset, size) descriptors, which the DPU bounds-checks before pulling data</li>
      <li><b>Data path:</b> DPU-side DMA (MMO) pull from host memory, RDMA relay to the peer DPU, then placement into remote host memory, streamed through bounded DPU buffers</li>
      <li><b>Framework integration:</b> VELOC and SCR for CPU-resident HPC state; PyTorch Distributed Checkpoint and ByteCheckpoint for GPU training through double-buffered pinned host staging, without changing their APIs</li>
    </ul>

    <p class="meta">
      <b>Key results:</b> up to <strong class="meta-strong">16×</strong> less extra host CPU time per checkpoint, up to <strong class="meta-strong">12×</strong> lower checkpoint blocking time, a persistent remote copy up to <strong class="meta-strong">4.5×</strong> sooner, and <strong class="meta-strong">&lt;1%</strong> end-to-end overhead in PyTorch DCP training.
    </p>

    <div class="links">
      <!--
      <a href="PUT_REPO_LINK_HERE">Paper</a>
      <a class="secondary" href="PUT_DOC_LINK_HERE">Code</a>
      -->
    </div>
  </div>
</div>


<div class="proj2">
  <div class="media">
    <img src="/images/projects/fitcache/System_Overview.svg" alt="FitCache I/O flow">
    <!-- optional: -->
    <!-- <img class="small" src="/images/projects/fitcache/results.png" alt="FitCache results"> -->
  </div>

  <div class="content">
    <h3>FitCache</h3>
    <p class="meta">IPDPS 2026 · Multi tier caching for distributed deep learning I/O</p>

    <p class="desc">
      Transparent drop in framework that intercepts POSIX reads and serves training data from the fastest tier among memory, NVMe, and PFS via concurrent fetch.
    </p>

    <ul>
      <li>LD_PRELOAD client intercepts open read close and forwards requests to a cache server</li>
      <li>Hierarchical cache across DRAM or PMem and NVMe above Lustre or BeeGFS</li>
      <li>Concurrent multi tier fetch returns the earliest responder, tolerating tier variability</li>
      <li>Scaled evaluation on Frontier up to 2048 GPUs and smaller clusters</li>
    </ul>

    <p class="meta">
      <b>Key results:</b> up to <strong class="meta-strong">40%</strong> training time reduction and up to
      <strong class="meta-strong">71.6%</strong> per batch I/O latency reduction (<strong class="meta-strong">188.3ms</strong> to <strong class="meta-strong">53.4ms</strong>).
    </p>

    <div class="links">
      <a href="https://ieeexplore.ieee.org/abstract/document/11575349/">Paper</a>
      <a class="secondary" href="https://github.com/Garson-hu/FitCache">Code</a>
    </div>
  </div>
</div>



<div class="proj2">
  <div class="media">
    <img class="img-wide" src="/images/projects/visualChirality/tsne_visual_chirality.png" alt="Visual chirality effect on hash codes">
    <!-- optional 2nd image -->
    <!-- <img class="small" src="/images/projects/visual-chirality/activation.png" alt="Activated regions: original vs flipped"> -->
  </div>

  <div class="content">
    <h3>Visual Chirality in Image Hashing</h3>
    <p class="meta">Neural Computing and Applications 2023 · Data augmentation analysis for deep hashing</p>

    <p class="desc">
      This project studies visual chirality, where flipping an image can change its semantics and shift the hash code distribution, which can hurt retrieval when flip augmentation is used.
    </p>

    <ul>
      <li>Designed a ResNet 50 based classifier to identify images with chiral cues by comparing predictions of original and flipped images</li>
      <li>Constructed chiral datasets with controlled proportions of chiral images on VOC2007, MS-COCO, and NUS-WIDE</li>
      <li>Evaluated three representative hashing pipelines: HashNet, DCH, and BYOL plus DCH under multiple hash code lengths</li>
      <li>Provided visual explanations via activated region comparisons between original and flipped images</li>
    </ul>

    <p class="meta">
      <b>Key results:</b> performance varies strongly with the proportion of chiral data, and the best performance consistently appears when chiral images account for
      <strong class="meta-strong">about 15% to 25%</strong> or <strong class="meta-strong">75% to 85%</strong>.
    </p>

    <div class="links">
      <a href="https://link.springer.com/article/10.1007/s00521-022-08141-0">Paper</a>
      <a class="secondary" href="https://github.com/lzHZWZ/Visual_Chirality_Hashing">Code</a>
    </div>
  </div>
</div>