# NextUI Alert Component

The `NextuiAlert` component is a versatile, customizable alert for React applications, built using [NextUI](https://nextui.org/) and TypeScript. This component provides a sleek, flexible solution for notifications, error handling, and other alert use cases, easily integrated into any project.

<img src="https://github.com/user-attachments/assets/95a04a63-45cc-49c9-9d78-4ffa591b3aaa" height="auto" width="640" />

> [!TIP]
> You can try the component live in [CodeSandbox](https://codesandbox.io/p/github/sensasi-delight/nextui-alert-demo/main). Click the link to see a fully interactive example of the alert in action.

## Table of Contents

-   [Installation](#installation)
-   [Getting Started](#getting-started)
    -   [Basic Example](#basic-example)
    -   [Variants and Severity](#variants-and-severity)
    -   [Adding Close Functionality](#adding-close-functionality)
    -   [Customizing Content](#customizing-content)
-   [Props](#props)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

> [!IMPORTANT]
> If you are not using NextUI as your primary UI library in your project, we are not recommending using this package. This package is built on top of NextUI components and requires NextUI to work correctly. However, if you are decided to use NextUI, you can consult the [NextUI documentation](https://nextui.org/docs/getting-started) to get started.

To start using `NextuiAlert`, install the package using npm or yarn:

```bash
npm install nextui-alert
```

## Getting Started

Here's how to get started with `NextuiAlert` in your project.

### Basic Example

You can use the `NextuiAlert` component by specifying the `severity` and providing a `title`:

```tsx
import NextuiAlert from 'nextui-alert'

function App() {
    return <NextuiAlert>Something went wrong with your request.</NextuiAlert>
}

export default App
```

### Variants and Severity

This component supports multiple variants (`flat`, `bordered`, `solid`) and severities (`info`, `success`, `warning`, `danger`), allowing you to tailor the alert's appearance:

```html
<NextuiAlert severity="success" variant="solid" title="Success">
    Operation completed successfully!
</NextuiAlert>

<NextuiAlert severity="warning" variant="bordered" title="Warning">
    Proceed with caution!
</NextuiAlert>
```

### Adding Close Functionality

To make the alert dismissible, pass an `onClose` function. A close button will appear automatically:

```tsx
<NextuiAlert
    severity="danger"
    title="Closable Alert"
    onClose={() => console.log('Alert closed!')}>
    Click the button to dismiss this alert.
</NextuiAlert>
```

### Customizing Content

You can customize the start and end content of the alert using the `startContent` and `endContent` props:

```tsx
import { Button } from '@nextui-org/button'
import { PizzaIcon } from 'lucide-react'

function App() {
    return (
        <NextuiAlert
            severity="warning"
            title="Reward Received"
            startContent={<PizzaIcon />}
            endContent={
                <Button size="sm" variant="bordered" color="warning">
                    Eat Now
                </Button>
            }>
            You've got a Pizza!
        </NextuiAlert>
    )
}
```

To remove the default icon, set `startContent` to `false`:

```html
<NextuiAlert severity="info" variant="bordered" startContent="{false}">
    This alert doesn't have an icon.
</NextuiAlert>
```

## Props

Since `NextuiAlert` extends the `Card` component from NextUI, it inherits all props from the `Card` component including `shadow`, `fullWidth`, and `radius`. You can view the complete list of props in the [NextUI Card Documentation](https://nextui.org/docs/card).

The `NextuiAlert` component extends the `Card` component from NextUI, meaning it accepts all `Card` props in addition to its own that listed on the table below.

| Prop           | Type                                           | Default             | Description                                                                                |
| -------------- | ---------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| `severity`     | `"info" \| "warning" \| "success" \| "danger"` | `"warning"`         | Defines the alert type and corresponding color.                                            |
| `variant`      | `"flat" \| "bordered" \| "solid"`              | `"flat"`            | Defines the appearance style of the alert.                                                 |
| `title`        | `string`                                       | `undefined`         | The title text displayed prominently at the top of the alert.                              |
| `startContent` | `ReactNode \| false`                           | Based on `severity` | Defines the content or icon at the start of the alert. Set to `false` to remove the icon.  |
| `endContent`   | `ReactNode`                                    | `undefined`         | Custom content to display at the end of the alert (optional).                              |
| `onClose`      | `() => void`                                   | `undefined`         | Callback function to handle closing the alert. When provided, a close button is displayed. |

## Contributing

Contributions are welcome! If you're interested in improving this project or adding new features, check out our [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

Your contributions—whether bug fixes, new features, or suggestions—are greatly appreciated!

## License

This project is open source under the MIT License. See the [LICENSE](https://github.com/sensasi-delight/nextui-alert?tab=MIT-1-ov-file) file for more information.
