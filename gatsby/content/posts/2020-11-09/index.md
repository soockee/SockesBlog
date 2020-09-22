---
path: "/cloud-data-storage-for-highly-parallel-applications"
cover: "./railway-entwine-potree-screenshot.png"
date: "2020-22-11"
title: "Cloud Data Storage for highly parallel applications"
published: true
tags: ['Software Engineering', 'Point Cloud', 'Research']
---

Die Speicherung von Daten bietet viele Facetten, die es zu berücksichtigen gilt. Das Spektrum reicht von Preis, zu Performance oder Accesability bis hin zu den spezifischen Anforderungen der Anwendung, welche auf die Daten zugreifen muss.

## Object Storage

Die **Object Storage** Architektur ist eines der drei am weitesten verbreiteten Cloud Storage Architekturen. Die Objekte bestehen aus den Daten selbst, einer variablen Anzahl an Metadaten und einer globalen einzigartigen ID (sog. GUID).
Objekt storage wird vorallem für die Speicherung unstrukturierter Daten genutzt. Bsp. Spotify Songs oder Bilder auf Facebook.
Services wie Amazon S3, Microsoft Azure Blob Storage, OpenStack Swift und Google Cloud Storage nutzen diese Architektur. Auf die Daten kann über eine API und somit über eine Netzwerk zugegriffen werden.

### Anwendungsfälle
* Speicherung von unstrukturierten Daten, wie Musik, Videos oder Fotos. 
* Speicherung von Backup Dateien, Logs etc.
* Archivierung von Daten

## Block Storage 
 
Block Storage bietet einer Instanz (z.B. VM) einen Speicher fester größe. Der Speicher nutzt meist die gängigen Dateisystemen. Entsprechend wird der speicher mit z.B. NTFS, FAT32 oder EXT4 formatiert. Block Storage Services sind z.B. [AWS EBS](https://aws.amazon.com/de/ebs/), Rackspace Block Storage, [Azure Disk Storage](https://azure.microsoft.com/en-us/services/storage/disks/). Auf Block Storage kann nur zugegriffen werden, wenn dieser an eine VM und dessen Betriebssystem angebunden ist.

### Andwendungsfälle
Block Storage wird für Datenbanken verwendet. Eine Datenbank braucht konsistenten I/O, sowie eine Verbindung mit geringer Latenz. Block Storage kann auch für RAID System genutzt werden. Dabei werden mehrere Block Storage Devices miteinander verknüpft und die RAID Operationen wie [Stripping](https://de.wikipedia.org/wiki/RAID#RAID_0:_Striping_%E2%80%93_Beschleunigung_ohne_Redundanz) und [Mirroring](https://de.wikipedia.org/wiki/RAID#RAID_1:_Mirroring_%E2%80%93_Spiegelung) können durchgeführt werden.
Für Serverseitige Datenverarbeitung bietet sich der einfache Block Storage an.


## Verteilte Dateisysteme

Verteilte Dateisysteme unterscheiden sich konzeptionell stark von Block Storage und Object Storage. 

Ein lokales Dateisystem weißt unter Unix eine Hierarchie auf. Das Dateisystem nutzt dabei den verfügbaren Speicher eines Speichermediums, wie z.B. einer HDD und Organisiert dieses.
In der Unix-Welt sorgt das Dateisystem für die Verwaltung der Dateien mittels *Inodes*. Inodes halten Daten über Daten. Metadaten also. 

**Blog Hierarchie**
```shell
.
├── Dockerfile
├── LICENSE
├── README.md
├── README.rst
├── default.conf
├── docker-compose.yml
├── gatsby
│   ├── LICENSE
│   ├── README.md
│   ├── config
│   ├── content
│   ├── gatsby-config.js
│   ├── gatsby-node.js
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   ├── src
│   └── static
├── html
│   └── index.html
├── img
│   └── Logo.png
├── migrate.sh
└── nginx.conf
```


Verteilte Dateisysteme müssen ähnliche Eigenschaften aufweisen, aber über mehrere Systeme hinweg funktionieren.

Sources: 
* [Understanding Object Storage and Block Storage Use Cases](https://cloudacademy.com/blog/object-storage-block-storage/)

* [Verteilte Dateisysteme unter Linux](https://blog.ordix.de/technologien/verteilte-dateisysteme-unter-linux)

* [Wikipedia: Object Storage](https://en.wikipedia.org/wiki/Object_storage#Cloud_storage)

* [Amazon: When to choose efs](https://aws.amazon.com/de/efs/when-to-choose-efs/)

* [A Survey of Distributed File System Technology By Jakob Blomer 2014](https://indico.cern.ch/event/258092/contributions/1588500/attachments/454164/629566/dfs.pdf)
