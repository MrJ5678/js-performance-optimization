// function doSomething(part, chapter) {
//   const parts = ['ES2016', 'webpack', 'vue', 'react', 'node']
//   if(part) {
//     if(parts.includes(part)) {
//       console.log('属于当前前端课程');
//       if(chapter > 5) {
//         console.log('您需要vip身份');
//       }
//     }
//   } else {
//     console.log('请确认模块信息');
//   }
// }

// doSomething('ES2016', 6)

function doSomething(part, chapter) {
  const parts = ["ES2016", "webpack", "vue", "react", "node"]
  if (!part) {
    console.log("请确认模块信息")
    return
  }
  if (!parts.includes(part)) return
  console.log("属于当前前端课程")
  if (chapter > 5) console.log("您需要vip身份")
}

doSomething("ES2016", 6)
