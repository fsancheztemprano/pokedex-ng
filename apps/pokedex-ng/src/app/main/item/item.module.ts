import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../../shared/shared.module';
import { ItemCategoryService } from '../../shared/services/item/item-category.service';
import { ItemPocketService } from '../../shared/services/item/item-pocket.service';
import { ItemService } from '../../shared/services/item/item.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  declarations: [ItemListComponent, ItemDetailComponent],
  imports: [CommonModule, ItemRoutingModule, InfiniteScrollModule, SharedModule],
  exports: [ItemDetailComponent],
})
export class ItemModule {
  constructor(
    private itemService: ItemService,
    private itemCategoryService: ItemCategoryService,
    private itemPocketService: ItemPocketService
  ) {}
}
