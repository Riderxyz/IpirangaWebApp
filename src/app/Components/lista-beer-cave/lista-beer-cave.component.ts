import { AmazonSrvService } from './../../Services/AmazonSrv/amazon-srv.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
@Component({
  selector: 'app-lista-beer-cave',
  templateUrl: './lista-beer-cave.component.html',
  styleUrls: ['./lista-beer-cave.component.scss'],
  providers: [AmazonSrvService]
})
export class ListaBeerCaveComponent implements OnInit {

 public relatorioService;

  isAnimated = true;
  autoCollapse = true;
  expandOnClick = true;

  options = {
    allowDrag: false,
    allowDrop: true,
    expandOnClick: true,
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandeAll();
        }
      }
    }
  }

  constructor(private service: AmazonSrvService) { }


  ngOnInit(): void {
   this.relatoriosLista();
   }


  relatoriosLista() {
    return this.service.listarRelatorioService()
    .then((res) => this.relatorioService = res)
    .catch((err) => console.log(err) );
  }


}

