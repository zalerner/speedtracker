<img src="https://s12.postimg.org/5f5867zil/Screen_Shot_2016_11_23_at_4_39_41_PM.png">

# Overview

These instructions apply to the management of Barrel's SpeedTracker instance. If you'd like to set up your own instance of SpeedTracker view the "Installation" section of the readme at the official SpeedTracker repo [here](https://github.com/speedtracker/speedtracker/).

---

## Run a Test

Tests are scheduled to run at intervals specified within their profile; however, tests can also be executed manually from the [official SpeedTracker site](https://speedtracker.org/test):

1. Visit [speedtracker.org/test](https://speedtracker.org/test)
1. Enter the following credentials:
    1. Github username (zalerner)
    1. Github repository (speedtracker)
    1. Github branch (master)
    1. Profile ID - The name of the html file in the \_profiles directory that you wish to test (e.g. caruso)
    1. Encryption key - Available on 1Pass
1. Click "RUN TEST"
1. Wait for confirmation in the gray box to the right of the credentials
1. Check the site to see your results

---

## Monitor New Pages
---

## Develop Locally

While changes to profiles and notification settings can be easily made within GitHub, editing the app's layout, styling, and functionality require bundling the app for production. Should you want to make changes to the app itself, use the following instructions to get the app up and running locally:

1. Install dependencies

  ```
  npm install
  ```
  
1. Start the Jekyll server

  ```
  jekyll serve --watch --port SOME_PORT
  ```
  
1. Start Webpack

  ```
  npm run watch
  ```

1. When you're done with your changes, build the bundle for production

  ```
  npm run build
  ```
  
---

## License

This project is licensed under the MIT license:

The MIT License (MIT)

Copyright (c) 2016 Eduardo Bouças

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
