# infiot-component-auigrid

![auigrid.png](data:image/png;base64,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)

> A AUI GRID Component for LG CNS INFIOT Solution.

## Prerequisite installations

``` bash
** 1.
>> npm install

** 2.
>> http://www.auisoft.net/demo/auigrid-vue/에서 'Download Free Trial' 클릭하여 정보 입력 후 zip 파일 다운로드

** 3.
>> 압출 해제 한 폴더 아래 'AUIGrid', 'AUIGrid-Vue.js' 폴더 두 개를 
최상위 폴더 아래 src/auisoft/ 에 붙여넣기 한다.

(예:
[project_name]/src/auisoft/AUIGrid,
[project_name]/src/auisoft/AUIGrid-vue.js 
두 개의 폴더가 생성될 것이다.)

2, 3의 과정은 AUISoft에서 제공하는 Free Trial의 폴더를 가져오기 위한 과정이며, 이 과정이 생략될 경우 컴파일이 정상적으로 되지 않는다.

** 4.
>> node_modules/infiot-component-auigrid/auigrid/auigrid.vue에서 AUIGrid 하는 부분을 폴더 경로에 맞게 수정한다.
(예: 
import AUIGrid from "../../../../../src/auisoft/AUIGrid-Vue.js/AUIGrid.vue";)


## How to use manual
``` bash
### How to use
### What the benefit
```

## Data Binding Model
``` bash

<span style="color:white">
<pre>
Boolean : Bindable</span>
Analog  : Bindable
Digital : Bindable
String : Bindable
Object : Bindable
Boolean Array : Bindable
Analog Array : Bindable
Digital Array : Bindable
String Array : Bindable
Object Array : Bindable
</pre>
</span>

```

For a detailed explanation on how the component work, please contact to the author.