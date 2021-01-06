# Snowpack
- What is Snowpack?
- Build (Optimize / Non-Optimize)
- Snowpack set env variables.
___

## Build (Optimize)
> 📦 Parcel
  - size : 4.56MB (4,789,708 바이트)
  - done : 46.82s.
  ```bash
  $ parcel build public/index.html -d build --no-source-maps

  √  Built in 43.06s.

  build\src.bad4b95e.js                    ‼  3.45 MB    42.22s
  build\src.a13915aa.css                   1017.88 KB    36.69s
  build\bankda_m_login2.feeecd4d.jpg         50.53 KB     5.37s
  build\logo.fcb24831.jpeg                   29.06 KB     6.07s
  build\bank_logo_89.922c36a2.gif              3.2 KB     5.24s
  build\bank_logo_23.8742a6cb.gif                3 KB     4.98s
  build\bank_logo_35.2b220219.gif             2.93 KB     5.24s
  build\bank_logo_91.8d50ed26.gif             2.88 KB     5.24s
  build\bank_logo_81.e14efbb2.gif             2.82 KB     4.75s
  build\userPageLeftHeader.39ce9274.png       2.69 KB     5.24s
  build\bank_logo_26.011a2be6.gif             2.52 KB     4.98s
  build\bank_logo_45.b997bce0.gif             2.52 KB     5.24s
  build\bank_logo_11.9778e7b9.gif             2.33 KB     4.98s
  build\bank_logo_37.26068a46.gif             2.22 KB     4.98s
  build\bank_logo_20.a85f1f3c.gif             2.22 KB     4.99s
  build\bank_logo_39.6574b1f8.gif             2.17 KB     6.07s
  build\bank_logo_03.db52af08.gif             2.12 KB     4.98s
  build\bank_logo_31.ce8272e2.gif              2.1 KB     4.98s
  build\bank_logo_32.97ca09d8.gif             2.07 KB     6.07s
  build\bank_logo_34.11bd7cc0.gif             2.06 KB     4.98s
  build\bank_logo_88.2236662d.gif             2.02 KB     5.24s
  build\bank_logo_48.5f3451b8.gif             1.94 KB     5.24s
  build\bank_logo_71.ba70e6ca.gif             1.73 KB     4.87s
  build\bank_logo_04.37e6cbb5.gif              1.7 KB     4.99s
  build\bank_logo_27.f08a80c0.gif             1.55 KB     4.98s
  build\index.html                              319 B     703ms

  Done in 46.82s.
  ```


> ⛄ Snowpack
  - size : 3.11MB (3,262,167 바이트)
  - done : 39.41s.
  ```bash
  $ snowpack build

  [snowpack] ! building source files...
  [snowpack] ✔ build complete [2.95s]
  [snowpack] ! installing dependencies...
  [snowpack] ✔ install complete! [32.04s]
  [snowpack] ! verifying build...
  [snowpack] ✔ verification complete [0.10s]
  [snowpack] ! writing build to disk...
  [snowpack] ! optimizing build...
  [optimize] (early preview: experiments.optimize is experimental, and still subject to change.)
  [snowpack] ✔ optimize complete [2.47s]
  [snowpack] ▶ Build Complete!

  Done in 39.41s.
  ```
  
> Compare

  | bundler | size | speed |
  | :-- | :-: | :-: |
  | Parcel 📦 | 4.56MB (4,789,708 바이트) | 46.82s |
  | Snowpack ⛄ | 2.21MB (2,327,235 바이트) | 39.41s |
___


## Build (Non-Optimize)


> 📦 Parcel
  - size : 7.16MB (7,510,305 바이트)
  - done : 32.20s.
  ```bash
  $ parcel build public/index.html -d build --no-source-maps --no-minify

  √  Built in 28.52s.

  build\src.832ea0bd.js                    ‼  5.78 MB    28.32s
  build\src.bcccf486.css                   ‼  1.26 MB    21.96s
  build\bankda_m_login2.feeecd4d.jpg         50.53 KB     3.04s
  build\logo.fcb24831.jpeg                   29.06 KB     3.04s
  build\bank_logo_89.922c36a2.gif              3.2 KB     3.02s
  build\bank_logo_23.8742a6cb.gif                3 KB     2.82s
  build\bank_logo_35.2b220219.gif             2.93 KB     2.96s
  build\bank_logo_91.8d50ed26.gif             2.88 KB     3.04s
  build\bank_logo_81.e14efbb2.gif             2.82 KB     2.88s
  build\userPageLeftHeader.39ce9274.png       2.69 KB     2.97s
  build\bank_logo_26.011a2be6.gif             2.52 KB     2.88s
  build\bank_logo_45.b997bce0.gif             2.52 KB     3.01s
  build\bank_logo_11.9778e7b9.gif             2.33 KB     2.86s
  build\bank_logo_37.26068a46.gif             2.22 KB     2.94s
  build\bank_logo_20.a85f1f3c.gif             2.22 KB     2.86s
  build\bank_logo_39.6574b1f8.gif             2.17 KB     2.91s
  build\bank_logo_03.db52af08.gif             2.12 KB     2.75s
  build\bank_logo_31.ce8272e2.gif              2.1 KB     2.94s
  build\bank_logo_32.97ca09d8.gif             2.07 KB     3.09s
  build\bank_logo_34.11bd7cc0.gif             2.06 KB     3.01s
  build\bank_logo_88.2236662d.gif             2.02 KB     2.92s
  build\bank_logo_48.5f3451b8.gif             1.94 KB     2.94s
  build\bank_logo_71.ba70e6ca.gif             1.73 KB     2.99s
  build\bank_logo_04.37e6cbb5.gif              1.7 KB     2.78s
  build\bank_logo_27.f08a80c0.gif             1.55 KB     2.89s
  build\index.html                              437 B      47ms

  Done in 32.20s.
  ```


> ⛄ Snowpack
  - size : 5.91MB (6,204,312 바이트)
  - done : 37.34s.
  ```bash
  $ snowpack build

  [snowpack] ! building source files...
  [snowpack] ✔ build complete [3.05s]
  [snowpack] ! installing dependencies...
  [snowpack] ✔ install complete! [32.04s]
  [snowpack] ! verifying build...
  [snowpack] ✔ verification complete [0.10s]
  [snowpack] ! writing build to disk...
  [snowpack] ▶ Build Complete!

  Done in 37.34s.
  ```

> Compare

  | bundler | size | speed |
  | :-- | :-: | :-: |
  | Parcel 📦 | 7.16MB (7,510,305 바이트) | 32.20s |
  | Snowpack ⛄ | 5.91MB (6,204,312 바이트) | 37.34s |

## Refs
- [snowpack](https://github.com/snowpackjs/snowpack)
- [snowpack guide](https://www.snowpack.dev/)

