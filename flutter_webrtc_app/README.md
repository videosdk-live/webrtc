# WebRTC Flutter App

## Clone Repository

Clone the repository to your local environment.

```sh
git clone https://github.com/videosdk-live/webrtc.git
```

### Server Setup

#### Step 1: Go to  webrtc-signalling-server folder

```js

cd webrtc-signalling-server

```

#### Step 2: Install Dependency

```js

npm install
```

#### Step 3: Run the project

```js

npm run start
```

---

### Client Setup

#### Step 1: Go to flutter_webrtc_app folder

```dart

cd flutter_webrtc_app
```

### Step 2: Get dependencies

```dart
flutter pub get
```

### Step 3: Update Signalling Server URL

in main.dart file, update the websocket url.

```dart
// signalling server url
final String websocketUrl = "SIGNALLING_SERVER_URL";
```

### Step 4: Run the sample app

Bingo, it's time to push the launch button.

```dart
flutter run
```
