# m3-svelte

M3 Svelte implements the Material 3 design system in Svelte. See the [website](https://ktibow.github.io/m3-svelte/) for demos and usage instructions.

## fork notes:
- inline styling with tailwind class
- no more passing extraOptions
- customize (almost) everything with classes
- can pass component with Primitive (ie. usage: InertiaLink components), no two components (Button, ButtonLink)

## Remake components

| Status   | Simbol |
|----------|--------|
| TODO     | 🔲     |
| DONE     | ✅     |
| PENDING  | ⏳     |

- Actions
  - ⏳ Button groups
  - 🔲 Buttons
  - ⏳ Extended FAB
  - ⏳ FAB Menu
  - 🔲 FAB
  - ⏳ Icon buttons
  - 🔲 Segmented Buttons
  - ⏳ Split buttons
- Communication
  - ⏳ Badges
  - ⏳ Loading indicator
  - ⏳ Progress indicator
  - ⏳ Snackbar
  - ⏳ Tooltips
- Containment
  - 🔲 Bottom sheets
  - 🔲 Cards
  - ⏳ Carousel
  - 🔲 Dialogs
  - ⏳ Divider
  - 🔲 Lists
  - ⏳ Side sheets
- Navigation
  - ⏳ App bars
  - ⏳ Navigation bar
  - ⏳ Navigation drawer
  - ⏳ Navigation rail
  - ⏳ Tabs
  - ⏳ Toolbar
- Selection
  - ⏳ Checkbox
  - ⏳ Chips
  - ⏳ Date pickers
  - ⏳ Menus
  - ⏳ Radio button
  - ⏳ Slider
  - ⏳ Switch
  - ⏳ Time pickers
- Text Inputs
  - ⏳ Search
  - ⏳ Text fields

## Old progress
- Buttons 
  - [x] Button.svelte
  - [x] FAB.svelte
  - [x] SegmentedButtonContainer.svelte
  - [x] SegmentedButtonItem.svelte
- Containers
  - [x] BottomSheet.svelte
  - [x] Card.svelte
  - [ ] ~~CardClickable.svelte~~
  - [x] Dialog.svelte
  - [x] ListItem.svelte
  - [ ] ~~ListItemButton.svelte~~
  - [ ] ~~ListItemLabel.svelte~~
  - [x] Menu.svelte
  - [x] MenuItem.svelte
  - [ ] Snackbar.svelte
  - [ ] SnackbarAnim.svelte
  - [ ] SnackbarItem.svelte
  - [ ] StandardSideSheet.svelte
- Forms
  - [ ] Checkbox.svelte
  - [ ] CheckboxAnim.svelte
  - [ ] Chip.svelte
  - [ ] CircularProgress.svelte
  - [ ] CircularProgressIndeterminate.svelte
  - [ ] DatePickerDocked.svelte
  - [ ] LinearProgress.svelte
  - [ ] LinearProgressIndeterminate.svelte
  - [ ] RadioAnim1.svelte
  - [ ] RadioAnim2.svelte
  - [ ] RadioAnim3.svelte
  - [ ] Slider.svelte
  - [ ] SliderTicks.svelte
  - [ ] Switch.svelte
  - [ ] TextField.svelte
  - [ ] TextFieldMultiline.svelte
  - [ ] TextFieldOutlined.svelte
  - [ ] TextFieldOutlinedMultiline.svelte
- Misc
  - [ ] Layer.svelte
  - [ ] StyleFromScheme.svelte
  - [ ] _icon.svelte
  - [ ] _ripple.svelte
  - [ ] _ripplesimple.svelte
  - [ ] _styling.svelte
- Nav
  - [ ] NavDrawer.svelte
  - [ ] NavDrawerButton.svelte
  - [ ] NavDrawerLink.svelte
  - [ ] NavList.svelte
  - [ ] NavListButton.svelte
  - [ ] NavListLink.svelte
  - [ ] Tabs.svelte
  - [ ] TabsLink.svelte
  - [ ] VariableTabs.svelte
  - [ ] VariableTabsLink.svelte
- Utils
  - [ ] ChipChooser.svelte
  - [ ] DateField.svelte
  - [ ] Divider.svelte
