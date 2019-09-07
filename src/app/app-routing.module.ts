import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'item', loadChildren: './pages/item/item.module#ItemPageModule' },
  { path: 'button', loadChildren: './pages/button/button.module#ButtonPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'badge', loadChildren: './pages/badge/badge.module#BadgePageModule' },
  { path: 'ripple-effect', loadChildren: './pages/ripple-effect/ripple-effect.module#RippleEffectPageModule' },
  { path: 'checkbox', loadChildren: './pages/checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'chip', loadChildren: './pages/chip/chip.module#ChipPageModule' },
  { path: 'datetime', loadChildren: './pages/datetime/datetime.module#DatetimePageModule' },
  { path: 'picker', loadChildren: './pages/picker/picker.module#PickerPageModule' },
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'infinite-scroll', loadChildren: './pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'icon', loadChildren: './pages/icon/icon.module#IconPageModule' },
  { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
  { path: 'textarea', loadChildren: './pages/textarea/textarea.module#TextareaPageModule' },
  { path: 'label', loadChildren: './pages/label/label.module#LabelPageModule' },
  { path: 'note', loadChildren: './pages/note/note.module#NotePageModule' },
  { path: 'virtual-scroll', loadChildren: './pages/virtual-scroll/virtual-scroll.module#VirtualScrollPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'image', loadChildren: './pages/image/image.module#ImagePageModule' },
  { path: 'thumbnail', loadChildren: './pages/thumbnail/thumbnail.module#ThumbnailPageModule' },
  { path: 'split-pane', loadChildren: './pages/split-pane/split-pane.module#SplitPanePageModule' },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
  { path: 'backdrop', loadChildren: './pages/backdrop/backdrop.module#BackdropPageModule' },
  { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'progress-bar', loadChildren: './pages/progress-bar/progress-bar.module#ProgressBarPageModule' },
  { path: 'skeleton-text', loadChildren: './pages/skeleton-text/skeleton-text.module#SkeletonTextPageModule' },
  { path: 'spinner', loadChildren: './pages/spinner/spinner.module#SpinnerPageModule' },
  { path: 'radio', loadChildren: './pages/radio/radio.module#RadioPageModule' },
  { path: 'range', loadChildren: './pages/range/range.module#RangePageModule' },
  { path: 'refresher', loadChildren: './pages/refresher/refresher.module#RefresherPageModule' },
  { path: 'reorder', loadChildren: './pages/reorder/reorder.module#ReorderPageModule' },
  { path: 'searchbar', loadChildren: './pages/searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'segment', loadChildren: './pages/segment/segment.module#SegmentPageModule' },
  { path: 'select', loadChildren: './pages/select/select.module#SelectPageModule' },
  { path: 'slides', loadChildren: './pages/slides/slides.module#SlidesPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'toast', loadChildren: './pages/toast/toast.module#ToastPageModule' },
  { path: 'toggle', loadChildren: './pages/toggle/toggle.module#TogglePageModule' },
  { path: 'toolbar', loadChildren: './pages/toolbar/toolbar.module#ToolbarPageModule' },
  { path: 'header', loadChildren: './pages/header/header.module#HeaderPageModule' },
  { path: 'footer', loadChildren: './pages/footer/footer.module#FooterPageModule' },
  { path: 'back-button', loadChildren: './pages/back-button/back-button.module#BackButtonPageModule' },
  { path: 'anchor', loadChildren: './pages/anchor/anchor.module#AnchorPageModule' },
  { path: 'text', loadChildren: './pages/text/text.module#TextPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
