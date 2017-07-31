# Typescript-VueJs-AspNetCore-Starter

## Prerequisites

Python 2.7.x

## Installation

1. Clone
2. ```dotnet restore``` both the Web and Api project
2. cd /src/Web
3. ```npm install```

## Development mode

This will run a development version of the SPA with hot module reloding via webpack.

```npm run dev```

## Production build

Although builing the Web project in Visual Studio will rebuild the wwwroot folder contents you can manually run this task via the command line

```npm run build```

Running the build will also run through the linter and run any tests that you have setup