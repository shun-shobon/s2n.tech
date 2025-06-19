---
title: オンラインプリクラ
description: "WebRTCを用いたオンラインでのプリクラ撮影サービス"
date: "2021-03-01"
image: "./online-purikura.jpeg"
technologies:
  - react
  - webrtc
platforms:
  - Web
links:
  - name: Repository
    url: https://github.com/ProvinDevs/2020vol5-frontend
  - name: Presentation
    url: https://youtu.be/KG09AJPwhqo?t=1180
---

Open Hack U 2020 Online Vol.5にて作成した作品です。
WebRTCを用いて、オンライン上で複数人でプリクラを撮影することができます。
Tensorflow.jsを用いて人物の形に切り抜き、それを合成することで1枚の写真に複数人で写ることができます。
撮った写真はスタンプによって共同で編集することが可能です。

この作品ではWebRTCでの通信や共同編集の実装をライブラリを使わず、自作しています。
私は主にフロントエンドUIとWebRTCによる通信、共同編集の実装を担当しました。
