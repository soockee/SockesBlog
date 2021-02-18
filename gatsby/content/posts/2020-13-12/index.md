---
path: "/benchmarking-a-distributed-filesystem"
cover: "./singapore-architecture.jpg"
date: "2020-12-13"
title: "Benchmarking a distributed filesystem"
published: false
tags: ['Software Engineering', 'Point Cloud', 'Research', 'Distributed Filesystem']
---

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