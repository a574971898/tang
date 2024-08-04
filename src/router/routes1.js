import index from "@/components/index"; // 首页
import pfp from "@/components/pfp"; // 首页
import getpfp from "@/components/getpfp"; // 首页
import mypfp from "@/components/mypfp"; // 首页
import test from "@/components/test"; // 首页
import member from "@/components/member"; // 首页
import setNFT from "@/components/setNFT"; // 首页

var routes1 = [
  {
    path: "/",
    name: "index",
    component: index
  },
    {
        path: "/pfp",
        name: "pfp",
        component: pfp
    },
    {
        path: "/getpfp",
        name: "getpfp",
        component: getpfp
    },
    {
        path: "/mypfp",
        name: "mypfp",
        component: mypfp
    },
    {
        path: "/test",
        name: "test",
        component: test
    },
    {
        path: "/member",
        name: "member",
        component: member
    },
    {
        path: "/setNFT",
        name: "setNFT",
        component: setNFT
    }
]; 

export default routes1;
