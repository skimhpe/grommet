## Text
Arbitrary text.

[![](https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png)](https://storybook.grommet.io/?selectedKind=Type-Text&full=0&stories=1&panelRight=0) [![](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/text&module=%2Fsrc%2FText.js)
## Usage

```javascript
import { Text } from 'grommet';
<Text />
```

## Properties

**a11yTitle**

Custom label to be used by screen readers. When provided, an aria-label will
   be added to the element.

```
string
```

**alignSelf**

How to align along the cross axis when contained in
      a Box or along the column axis when contained in a Grid.

```
start
center
end
stretch
```

**gridArea**

The name of the area to place
    this inside a parent Grid.

```
string
```

**margin**

The amount of margin around the component. An object can be 
    specified to distinguish horizontal margin, vertical margin, and margin on 
    a particular side. For vertical margin to be applied, Text needs to be 
    contained within a layout component (such as Box or a generic div) or 
    behave as a div (by applying as="div" or a display style of 
    inline-block).

```
none
xxsmall
xsmall
small
medium
large
xlarge
{
  bottom: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  end: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  horizontal: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  left: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  right: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  start: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  top: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  vertical: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string
}
string
```

**color**

A color identifier to use for the text color.

```
string
{
  dark: string,
  light: string
}
```

**size**

The font size and line space height of the text. Defaults to `medium`.

```
xsmall
small
medium
large
xlarge
xxlarge
2xl
3xl
4xl
5xl
6xl
string
```

**tag**

The DOM tag to use for the element. NOTE: This is deprecated in favor
         of indicating the DOM tag via the 'as' property.

```
string
function
```

**as**

The DOM tag or react component to use for the element. Defaults to `span`.

```
string
function
element
```

**textAlign**

How to align the text inside the component. Defaults to `start`.

```
start
center
end
```

**tip**

tooltip or a hint when hovering over the text. If the
        value is a string and no a11yTitle value is provided, tip value will be
        used for the a11yTitle default value.

```
{
  content: 
    node
    string,
  dropProps: 
    {

    },
  plain: boolean
}
string
```

**truncate**

Restrict the text to a single line and truncate with ellipsis if it
is too long to all fit. For truncate to be applied, Text needs to be 
contained within a layout component (such as Box or a generic div).

```
boolean
```

**weight**

Font weight

```
normal
bold
number
```

**wordBreak**

Whether words should break when reaching the end of a line. Defaults to `normal`.

```
normal
break-all
keep-all
break-word
```
  
## Intrinsic element

```
span
```
## Theme
  
**global.colors.text**

The text color used for Text. In order for this to take 
    effect, global.colors.background needs to be defined. Expects `object | { dark: string, light: string }`.

Defaults to

```
{ dark: '#f8f8f8', light: '#444444' }
```

**text.font.family**

The font family to use for Text. Expects `string`.

Defaults to

```
undefined
```

**text**

The possible sizes of the text in terms of its font-size and 
line-height. Expects `object`.

Defaults to

```
{
      xsmall: {
        size: '12px',
        height: '18px',
       },
      small: {
        size: '14px',
        height: '20px',
       },
      medium: {
        size: '18px',
        height: '24px',
      },
      large: {
        size: '22px',
        height: '28px',
      },
      xlarge: {
        size: '26px',
        height: '32px',
      },
      xxlarge: {
        size: '34px',
        height: '40px',
      },
    }
```

**text.extend**

Any additional style for Text. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**global.edgeSize**

The possible sizes for margin. Expects `object`.

Defaults to

```
{
    edgeSize: {
      none: '0px',
      hair: '1px',
      xxsmall: '3px',
      xsmall: '6px',
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px',
      responsiveBreakpoint: 'small',
    },
  }
```
