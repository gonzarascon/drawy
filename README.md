# Drawy

**Drawy** is a type-safe React library for managing side panels (drawers) in your applications. It leverages TypeScript, React Context, and Radix UI to provide a seamless experience for developers looking to implement side panels with ease and flexibility.

## Features

- **Type-Safe Panel Management**: Open only the panels you've defined, ensuring compile-time safety.
- **Multiple Overlapping Panels**: Stack side panels with visual cues for depth.
- **Customizable Styling**: Designed with Tailwind CSS for easy and flexible styling.
- **Accessible Components**: Uses Radix UI for accessible and unstyled components.
- **SSR-Friendly**: Supports server-side rendering scenarios with initial state.

## Table of Contents

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Define Your Panels](#1-define-your-panels)
  - [2. Create Your Panels Configuration](#2-create-your-panels-configuration)
  - [3. Set Up Drawy](#3-set-up-drawy)
  - [4. Wrap Your Application](#4-wrap-your-application)
  - [5. Use the `useDrawy` Hook](#5-use-the-usedrawy-hook)
- [Examples](#examples)
  - [Opening Multiple Panels](#opening-multiple-panels)
  - [Closing Panels](#closing-panels)
  - [Accessing Drawy State](#accessing-drawy-state)
- [API Reference](#api-reference)
  - [`createDrawy(panels)`](#createdrawypanels)
  - [`DrawyProvider`](#drawyprovider)
  - [`useDrawy()`](#usedrawy)
- [Tailwind CSS Integration](#tailwind-css-integration)
- [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
# npm
npm install drawy @radix-ui/react-dialog
```

## Prerequisites

- **React**: `>=17.0.0`
- **Tailwind CSS**: Drawy is designed to work with Tailwind CSS.

## Getting Started

### 1. Define Your Panels

Create your side panel components:

```tsx
import React from 'react';

const SettingsPanel: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      {/* Your settings content */}
    </div>
  );
};

export default SettingsPanel;
```

```tsx
import React from 'react';

const ProfilePanel: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {/* Your profile content */}
    </div>
  );
};

export default ProfilePanel;
```


### 2. Create Your Panels Configuration Set Up Drawy

Import your panels and define them in a configuration object and use the `createDrawy` function to set up Drawy with your panels:

```tsx
// drawySetup.tsx
import { createDrawy } from 'drawy';
import SettingsPanel from './SettingsPanel';
import ProfilePanel from './ProfilePanel';

export const panels = {
  settings: SettingsPanel,
  profile: ProfilePanel,
};

export const { DrawyProvider, useDrawy } = createDrawy(panels);
```

### 3. Wrap Your Application

Wrap your application with the `DrawyProvider`:

```tsx
// App.tsx
import React from 'react';
import { DrawyProvider } from './drawySetup';
import MainComponent from './MainComponent';

const App: React.FC = () => (
  <DrawyProvider>
    <MainComponent />
  </DrawyProvider>
);

export default App;
```

### 4. Use the `useDrawy` Hook

In your components, use the `useDrawy` hook to open panels:

```tsx
// MainComponent.tsx
import React from 'react';
import { useDrawy } from './drawySetup';

const MainComponent: React.FC = () => {
  const { open } = useDrawy();

  return (
    <div className="p-4">
      <button
        onClick={() => open('settings')}
        className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
      >
        Open Settings
      </button>
      <button
        onClick={() => open('profile')}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Open Profile
      </button>
    </div>
  );
};

export default MainComponent;
```

## Examples

### Opening Multiple Panels

Drawy allows you to open multiple panels that stack on top of each other. Say goodbye to managing z-index issues!

```tsx
import React from 'react';
import { useDrawy } from './drawySetup';

const Dashboard: React.FC = () => {
  const { open } = useDrawy();

  return (
    <div>
      <button onClick={() => open('settings')}>Open Settings</button>
      <button onClick={() => open('profile')}>Open Profile</button>
    </div>
  );
};

export default Dashboard;
```

### Closing Panels

You can close the topmost panel or all panels using the `close` and `closeAll` functions.

```tsx
const { close, closeAll } = useDrawy();

// Close the topmost panel
close();

// Close all panels
closeAll();
```

### Accessing Drawy State

The `useDrawy` hook also provides access to the internal Drawy state via the `openPanels` array. You can use this to react to panel changes in your components.

```tsx
const { openPanels } = useDrawy();

if (openPanels.includes('settings')) {
  // Do something if settings panel is open
}
```


## Initial state


Initialize Drawy with pre-opened panels, this is useful for SSR scenarios where you may need some drawers to be open by default.

```tsx
import React from 'react';
import { DrawyProvider } from '../drawySetup';
import MainComponent from '../MainComponent';

const HomePage = () => (
  <DrawyProvider initialOpenPanels={['profile']}>
    <MainComponent />
  </DrawyProvider>
);

export default HomePage;
```

## API Reference

### `createDrawy(panels)`

Creates a Drawy instance with the specified panels.

#### Parameters

- `panels`: `Record<string, React.ReactNode>` - An object where keys are panel identifiers and values are React components to be rendered in the panels.

#### Returns

An object containing:

- `DrawyProvider`: A React component to wrap your application.
- `useDrawy`: A custom hook to access Drawy functionality.

### DrawyProvider

The main component that provides the Drawy context to its children.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | Required | The child components to be rendered. |
| `initialOpenPanels` | `PanelKeys<P>[]` | `[]` | An optional array of panel keys to be initially opened. |
| `drawerClassName` | `string` | `undefined` | An optional CSS class name for the drawer component. |
| `closeComponent` | `React.ReactNode` | `<span>&times</span>` | An optional custom close component. |

### useDrawy

A custom hook to access Drawy functionality within your components.

#### Returns

An object containing:

| Property | Type | Description |
|----------|------|-------------|
| `open` | `(panel: PanelKeys<P>) => void` | Function to open a specific panel. |
| `close` | `() => void` | Function to close the most recently opened panel. |
| `closeAll` | `() => void` | Function to close all open panels. |
| `openPanels` | `PanelKeys<P>[]` | Array of currently open panel keys. |


## Tailwind CSS Integration

Drawy is designed to work seamlessly with Tailwind CSS. Ensure Tailwind CSS is set up in your project.

   ```js
   // tailwind.config.js
   module.exports = {
     content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/drawy/**/*.{js,jsx,ts,tsx}'],
     // ...your tailwind config
     theme: {
        extend: {
          // ...your theme
          keyframes: {
      				"slide-in-right": {
       					from: { transform: "translate3d(100%,0,0)" },
       					to: { transform: "translate3d(0,0,0)" },
      				},
      				"slide-out-right": {
       					from: { transform: "translate3d(0,0,0)" },
       					to: { transform: "translate3d(100%,0,0)" },
      				},
         	},
     			animation: {
    				"slide-out-right": "slide-out-right 150ms cubic-bezier(0.22, 1, 0.36, 1)",
    				"slide-in-right": "slide-in-right 150ms cubic-bezier(0.22, 1, 0.36, 1)",
     			},
        },
      },
     }
   };
   ```

## Contributing

We welcome contributions! Please read our [contributing guide](CONTRIBUTING.md) to get started.

## License

Drawy is open-source software licensed under the [MIT license](LICENSE).
