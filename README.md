# Arkesia.gg Overwolf - A Lost Ark interactive map

- [Website](https://arkesia.gg)
- [Website on GitHub](https://github.com/lmachens/arkesia.gg-web)

## Contribution

This app is Open Source. Contributors are highly welcome!

Join us on our [Discord](https://discord.com/invite/NTZu8Px).

### Requirements

This project uses [Node.js](https://nodejs.org/en/) and [Overwolf](https://www.overwolf.com/).
Please follow the instructions on [Overwolf Developer](http://developers.overwolf.com/documentation/odk-2-0-introduction/creating-your-first-app/) to get white listed in Overwolf. Then you can start developing!

If you don't want to open https://arkesia.gg in the app, you need to override the environment variables defined in `.env`. You can create a `.env.local` (which is ignored by GIT) and set your environment variables.

The following list shows all environemnt variables:

| KEY          | VALUE                                            |
| ------------ | ------------------------------------------------ |
| VITE_APP_WEB | Website which will be embed as iframe in the app |

### Development

From your terminal, you need to install the dependencies first:

```sh
npm install
```

You need to install [Overwolf](https://download.overwolf.com/install/Download) too.

You need to build the project at least once, otherwise, you won't be able to load the project in Overwolf.

```
npm run build
```

### Install as "unpacked extension"

Based on this [guide](https://overwolf.github.io/docs/start/sample-app-overview#5-install-the-app-as-unpacked-extension) you can install the app.

- Open the Overwolf desktop client settings (by right-clicking the client and selecting "Packages"
  Or by clicking on the wrench icon in the dock and going to the "About" tab => "Development Options").

- Click on "Development options".

- In the opened window, click on "Load unpacked extension" and select the extracted '/overwolf' folder.
  This will add the app to your Overwolf dock.

- Make sure you are logged in to the OW client. Otherwise, you will get an "Unauthorized App" error message. (Click on the "Appstore" icon in the OW dock to login to the OW client).

### Development server

Now you are ready to start the app in development mode:

```sh
npm run dev
```

## Licensing

MIT
