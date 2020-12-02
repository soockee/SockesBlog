---
path: "/benchmarking-a-distributed-filesystem"
cover: "./singapore-architecture.jpg"
date: "2020-15-12"
title: "Benchmarking a distributed filesystem"
published: true
tags: ['Software Engineering', 'Point Cloud', 'Research', 'Distributed Filesystem']
---

[WIP]

Notizen:
DFS: *beegfs*
Benchmarking: *IOR* u. StorageBench

Ausprobiert:
bonnie++
izone

Architektur:
1 Managment
2 Storage
1 Metadata
2 Client



Disks auf einem Storage:
![](./dh-h.png)

Erster Versuch: Eine Disk pro Storage Node
![](./IOR-Test-Naive_standard.png)
![](./IOR-Test-io1_iops.png)
![](./IOR-Test-io1_throughput.png)

Nach langem tüfteln und noch immer Ausbaubedürftig: 2 I/O Optimierte Disks pro Storage Node
![](./IOR-Test-two-disk-per-storage-parallel-client.png)



sources:

https://github.com/distributed-system-analysis/smallfile

https://www.beegfs.io/wiki/Benchmark

https://ior.readthedocs.io/en/latest/userDoc/tutorial.html