<template>
      <AUIGrid ref="myGrid" class="grid-wrap">
      </AUIGrid>  
</template>
 
<script>

// AUIGrid 컴포넌트
import AUIGrid from "../auisoft/AUIGrid-Vue.js/AUIGrid.vue";
 
export default {
    components : {
        AUIGrid
    },
    name: "auigrid",
    props: {
      attr: {
        type: Object
      }
    },
    data: function () {
        return {
            // maxH: this.attr.layout.height.value,
            // maxW: this.attr.layout.width.value,

            // 그리드 칼럼 레이아웃 정의
            columnLayout : [{
                dataField : "header1",
                headerText : "header1",
                height: 80
            }, {
                dataField : "header2",
                headerText : "header2",
            }, {
                dataField : "header3",
                headerText : "header3",
                // dataType : "numeric",
            }],
            // 그리드 속성 정의
            auigridProps : {
                // 편집 가능 여부 (기본값 : false)
                editable : false,
                // 셀 선택모드 (기본값: singleCell)
                selectionMode : "multipleCells"
            },
            // 그리드 데이터
            gridData : [
            { header1: 'data1', header2: 'data1', header3: 'data1' },
            { header1: 'data2', header2: 'data2', header3: 'data2' },
            { header1: 'data3', header2: 'data3', header3: 'data3' }
          ]
        }
    },
   
    mounted(){
        let grid = this.$refs.myGrid;
        // 그리드 생성
        grid.create(this.columnLayout, this.auigridProps);

        // 그리드 데이터 삽입하기
        grid.setGridData(this.gridData);
    },

   methods : {
      propertyValueChanged(propGroupName, propName){
        //if(propGroupName == 'gridInfo' && propName == 'headerOrder'){
          
        //}
      },
      bindingValueChanged(propertyName, value)
      {
        if(propertyName.toString() == "tagId")
        {
          var tagJson = JSON.stringify(value); // json 객체를 String 객체로 변환
          var tagObj = JSON.parse(tagJson); // string 객체를 json 객체로 변환 

          this.items = tagObj
        }
      },
      onResized(x, y, width, height)
      {
        let grid = this.$refs.myGrid;
        grid.resize(width - 10 ,height - 10);
      }
    }
}

</script>
 
<style>
    .grid-wrap {
        /* width:600px;
        height:480px; */
        /* border: 1px solid #444444; */
        /* padding: 10px; */
        /* height: 100%; 
        width: 100%; */
    }
</style>