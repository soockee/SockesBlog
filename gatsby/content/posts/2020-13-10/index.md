---
path: "/hadoop-spark-and-dfs"
cover: "./feld-mit-rot.jpg"
date: "2020-13-10"
title: "Hadoop, Spark und Distributed File Systems"
published: true
tags: ['Software Engineering', 'Point Cloud', 'Research', 'Distributed Filesystem']
---

Hadoop ist eine Sammlung von Software, die es einem ermöglicht, Berechnungen auf einem Cluster von Maschinen durchzuführen.

Hadoop ist ein Javabasierendes Framework. Die Verarbeitung und Speicherung von großen Datensätzen in einer verteilten Umgebung wird mit dem Framework ermöglicht. Fehlerfälle von Knoten sollen behandelt und eine Verarbeitung ohne unterbrechen gewährleistet werden. Der Hadoop Core beinhaltet die Map-Reduce Engine, sowie ein verteiltes Dateisystem (HDFS).

Hadoop wird als eines der führenden Big Data Frameworks angesehen. Allerdings hat das darunterliegende verteilte Dateisystem (HDFS) einige Schwächen:
* Single Point of Failure
* Zentralisierter Nameserver
* **keine POSIX Kompatibilität**
* Speicher mindestens 3 Kopien der Daten

## Parallel Prozessierung vs. Distributed Prozessierung
Um zu verstehen wie Apache Hadoop und Apache Spark funktionieren, muss man die beiden Prozessierungsparadigmen verstanden haben. Da bei beiden Paradigmen die Verarbeitung in kleinere Teile geteilt und auf die Knoten verteilt werden, kann es aufgrund ihrer Ähnlichkeit zueinander zu Verwirrungen kommen. Der Kernunterschied liegt in der Datenspeicherung.

    “Parallel computing is the simultaneous use of more than one processor to solve a problem” [1].

    “Distributed computing is the simultaneous use of more than one computer to solve a problem” [1].


to be continued...

[0] https://towardsdatascience.com/big-data-analytics-apache-spark-vs-apache-hadoop-7cb77a7a9424

[1] Pierfederici, Francesco. ​Distributed Computing with Python.​ Packt Publishing, 2016. ​EBSCOhost,​search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=1220461&site=ehost-live.