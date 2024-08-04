<template>
  <div class="mypfp">
    <div class="bg"></div>
    <div class="pfptit" style="position: relative">{{globalParam=='Zh'?'我的PFP':"My PFP"}}</div>
    <div class="kong" style="position: relative" v-if="pfpdata.length == 0">
      <img src="@/assets/other/kong.png" alt="" srcset="" />
      <div class="boxcenter">
        <div class="getbtn">{{globalParam=='Zh'?'获取PFP':"Get PFP"}}</div>
      </div>
    </div>
    <div class="pfplist" v-else>
      <div class="listbox" v-for="(item, index) in pfpdata" :key="index">
        <div class="listboxs">
          <img
            v-if="item.level == 1"
            src="../assets/other/Lv1.png"
            alt=""
            srcset=""
          />
          <img
            v-if="item.level == 2"
            src="../assets/other/Lv2.png"
            alt=""
            srcset=""
          />
          <img
            v-if="item.level == 3"
            src="../assets/other/Lv3.png"
            alt=""
            srcset=""
          />
          <img
            v-if="item.level == 4"
            src="../assets/other/Lv4.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="lv" v-if="item.level == 1">
          <!-- <img src="../assets/other/btnlv1.png" alt="" /> -->
          Common
        </div>
        <div class="lv lv2" v-if="item.level == 2">
          <!-- <img src="../assets/other/btnlv2.png" alt="" /> -->
            Rare
        </div>
        <div class="lv lv3" v-if="item.level == 3">
          <!-- <img src="../assets/other/btnlv3.png" alt="" /> -->
            Epic            
        </div>
        <div class="lv lv4" v-if="item.level == 4">
          <!-- <img src="../assets/other/btnlv4.png" alt="" /> -->
            Legendary
        </div>
        <div
          v-if="item.level == 1"
          class="pfplistbtn btn1"
        >
            <div v-if="item.status == 1 || item.status == 2 || item.status == 5|| item.status == 6">
                <span v-if="globalParam=='Zh'">请等待</span>
                <span v-else>Please wait</span>
            </div>
             <div v-if="item.status == 3" @click="paygas(item.level,index)">
                <span v-if="globalParam=='Zh'">铸造</span>
                <span v-else>Mint</span>
            </div>
            <div v-if="item.status == 4" @click="open(index)">
                <span v-if="globalParam=='Zh'">打开</span>
                <span v-else>Open</span>
            </div>
        </div>
        <div
          v-if="item.level == 2"
          class="pfplistbtn btn2"
        >
         <div v-if="item.status == 1 || item.status == 2 || item.status == 5|| item.status == 6">
                <span v-if="globalParam=='Zh'">请等待</span>
                <span v-else>Please wait</span>
            </div>
             <div v-if="item.status == 3" @click="paygas(item.level,index)">
                <span v-if="globalParam=='Zh'">铸造</span>
                <span v-else>Mint</span>
            </div>
            <div v-if="item.status == 4" @click="open(index)">
                <span v-if="globalParam=='Zh'">打开</span>
                <span v-else>Open</span>
            </div>
        </div>
        <div
          v-if="item.level == 3"
          class="pfplistbtn btn3"
        >
         <div v-if="item.status == 1 || item.status == 2 || item.status == 5|| item.status == 6">
                <span v-if="globalParam=='Zh'">请等待</span>
                <span v-else>Please wait</span>
            </div>
             <div v-if="item.status == 3" @click="paygas(item.level,index)">
                <span v-if="globalParam=='Zh'">铸造</span>
                <span v-else>Mint</span>
            </div>
            <div v-if="item.status == 4" @click="open(index)">
                <span v-if="globalParam=='Zh'">打开</span>
                <span v-else>Open</span>
            </div>
        </div>
        <div
          v-if="item.level == 4"
          class="pfplistbtn btn4"
        >
             <div v-if="item.status == 1 || item.status == 2 || item.status == 5|| item.status == 6">
                <span v-if="globalParam=='Zh'">请等待</span>
                <span v-else>Please wait</span>
            </div>
             <div v-if="item.status == 3" @click="paygas(item.level,index)">
                <span v-if="globalParam=='Zh'">铸造</span>
                <span v-else>Mint</span>
            </div>
            <div v-if="item.status == 4" @click="open(index)">
                <span v-if="globalParam=='Zh'">打开</span>
                <span v-else>Open</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mypfp",
  data() {
    return {
      pfpdata: [
        
      ],
      codelist:[],
    };
  },
  created() {
    this.getweb3();
    this.getlist();
  },
  computed: {
    globalParam() {
      return this.$store.getters.globalParam;
    }
  },
  methods: {
    getlist(){
         this.$post("/code_list", {
                addr: sessionStorage.res,
            }).then((res) => {
                if(res.data){
                    this.pfpdata = Object.values(res.data)
                    this.codelist = Object.keys(res.data)
                }else{
                    this.pfpdata = []
                }
            })
    },
    open(index) {
         var str = this.codelist[index]
      sessionStorage.code = str
      this.$router.push("/test");
    },
    getweb3() {
      var contractAddress = "0xC659DF3f080201156680C3E6A0697aa4900A0f77";
      var contractAddresstwo = "0xf38435E51Bd47FB7acc45a5FCBC171df922944F9";
      var defaultAccount = sessionStorage.res;
      var gasPrices;

      var gasLimit = 5000000; // 降低 gas 限制
      var myContract = new web3.eth.Contract(
        [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "IDtoAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "IDtolevel",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "NFTTY", type: "uint256" },
              {
                internalType: "string",
                name: "RedemptionCodeS",
                type: "string",
              },
            ],
            name: "NFTMint",
            outputs: [{ internalType: "uint256", name: "s", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            name: "NFTlevel",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            name: "NFTlevelamount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "NFTID", type: "uint256" },
            ],
            name: "getNFTIDlevel",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "NFTID", type: "uint256" },
            ],
            name: "getNFTIDtoaddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "adds", type: "address" },
              { internalType: "uint256", name: "NFTTY", type: "uint256" },
            ],
            name: "getuserNFTID",
            outputs: [
              { internalType: "uint256[]", name: "", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "adds", type: "address" },
            ],
            name: "getuserNFTsuremint",
            outputs: [
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "NFTID", type: "uint256" },
              {
                internalType: "uint256",
                name: "imangeData",
                type: "uint256",
              },
            ],
            name: "setdata",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address[]", name: "adds", type: "address[]" },
              { internalType: "uint256[]", name: "level", type: "uint256[]" },
              {
                internalType: "uint256[]",
                name: "amount",
                type: "uint256[]",
              },
              {
                internalType: "string[]",
                name: "RedemptionCodeS",
                type: "string[]",
              },
            ],
            name: "setuserinfo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "adds", type: "address" },
              { internalType: "uint256", name: "level", type: "uint256" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "string",
                name: "RedemptionCode",
                type: "string",
              },
            ],
            name: "setuserinfoOne",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferPwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            name: "userinfo",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        contractAddress
      );
      var myContracttwo = new web3.eth.Contract(
        [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
              },
              {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "ApprovalForAll",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "string",
                name: "_from",
                type: "string",
              },
              {
                indexed: false,
                internalType: "string",
                name: "_to",
                type: "string",
              },
            ],
            name: "BaseUri",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [],
            name: "MAX_SUPPLY",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "RESERVED_SUPPLY",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "STELLARS_PROVENANCE",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "limit", type: "uint256" },
            ],
            name: "airdropRemainingSupply",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address[]", name: "list", type: "address[]" },
            ],
            name: "airdropToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "approve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "claimedCount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_pyxis", type: "address" },
            ],
            name: "connectPyxis",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "contractl",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "emergencySetStartingIndexBlock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "getApproved",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getIDCurrent",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "hasPyxis",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "operator", type: "address" },
            ],
            name: "isApprovedForAll",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { internalType: "uint256", name: "expire", type: "uint256" },
                ],
                internalType: "struct ARCStellars.CouponData",
                name: "meta",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "bytes32", name: "r", type: "bytes32" },
                  { internalType: "bytes32", name: "s", type: "bytes32" },
                  { internalType: "uint8", name: "v", type: "uint8" },
                ],
                internalType: "struct ARCStellars.Coupon",
                name: "coupon",
                type: "tuple",
              },
            ],
            name: "isValidUser",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxPerUserSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { internalType: "uint256", name: "expire", type: "uint256" },
                ],
                internalType: "struct ARCStellars.CouponData",
                name: "meta",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "bytes32", name: "r", type: "bytes32" },
                  { internalType: "bytes32", name: "s", type: "bytes32" },
                  { internalType: "uint8", name: "v", type: "uint8" },
                ],
                internalType: "struct ARCStellars.Coupon",
                name: "coupon",
                type: "tuple",
              },
            ],
            name: "mint",
            outputs: [
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "string", name: "", type: "string" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "mintPrice",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "to", type: "address" }],
            name: "mintReservedNFT",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "ownerOf",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "reserveContractAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
              { internalType: "bytes", name: "_data", type: "bytes" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "setAccountOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "operator", type: "address" },
              { internalType: "bool", name: "approved", type: "bool" },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "string", name: "baseURI", type: "string" },
            ],
            name: "setBaseURI",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "setCouponOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "bool", name: "status", type: "bool" }],
            name: "setMintPaused",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_value", type: "uint256" },
            ],
            name: "setPerUserSupply",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "provenanceHash",
                type: "string",
              },
            ],
            name: "setProvenanceHash",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "reserveContractAddress_",
                type: "address",
              },
            ],
            name: "setReserveContractAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "setStartingIndex",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "setStopMint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "startingIndex",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "startingIndexBlock",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "stopped",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
            ],
            name: "supportsInterface",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "tokenURI",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newContract", type: "address" },
            ],
            name: "transferContractship",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        contractAddresstwo
      );
      myContract.methods
        .getuserNFTsuremint(defaultAccount)
        .call()
        .then((res) => {
          console.log(res, 111);
        });
        myContract.methods
        .getuserNFTID(defaultAccount,4)
        .call()
        .then((res) => {
          console.log(res, 1233321);
        });
        
        myContracttwo.methods
        .balanceOf(defaultAccount)
        .call()
        .then((res) => {
          console.log(res, 222);
        });
        myContracttwo.methods
        .tokenURI("5")
        .call()
        .then((res) => {
          console.log(res, 2222222);
        });
        // /nft_info
      myContract.methods.getuserNFTsuremint(defaultAccount).call()
      .then((res)=>{
          console.log(res,333);
      });
    },
    paygas(lv,index){
      var contractAddress = "0x509Fb4f938aDEa01191B66e5CA9cd670f9A591dd";
      var myContract = new web3.eth.Contract(
        [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "IDtoAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "IDtolevel",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "NFTTY", type: "uint256" },
              {
                internalType: "string",
                name: "RedemptionCodeS",
                type: "string",
              },
            ],
            name: "NFTMint",
            outputs: [{ internalType: "uint256", name: "s", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            name: "NFTlevel",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            name: "NFTlevelamount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "NFTID", type: "uint256" },
            ],
            name: "getNFTIDlevel",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "NFTID", type: "uint256" },
            ],
            name: "getNFTIDtoaddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "adds", type: "address" },
              { internalType: "uint256", name: "NFTTY", type: "uint256" },
            ],
            name: "getuserNFTID",
            outputs: [
              { internalType: "uint256[]", name: "", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "adds", type: "address" },
            ],
            name: "getuserNFTsuremint",
            outputs: [
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "NFTID", type: "uint256" },
              {
                internalType: "uint256",
                name: "imangeData",
                type: "uint256",
              },
            ],
            name: "setdata",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address[]", name: "adds", type: "address[]" },
              { internalType: "uint256[]", name: "level", type: "uint256[]" },
              {
                internalType: "uint256[]",
                name: "amount",
                type: "uint256[]",
              },
              {
                internalType: "string[]",
                name: "RedemptionCodeS",
                type: "string[]",
              },
            ],
            name: "setuserinfo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "adds", type: "address" },
              { internalType: "uint256", name: "level", type: "uint256" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "string",
                name: "RedemptionCode",
                type: "string",
              },
            ],
            name: "setuserinfoOne",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferPwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            name: "userinfo",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        contractAddress
      );
      var defaultAccount = sessionStorage.res;
      var gasPrices = ''
        web3.eth
      .getGasPrice()
      .then((gasPrice) => {
        gasPrices = gasPrice.toString(10);
      })
      var str = this.codelist[index]
      console.log(this.codelist,index);
      myContract.methods
         .NFTMint(lv,str)
         .send({
         from: defaultAccount,
          gas: gasPrices,
        })
    }
  },
};
</script>
<style lang="less" scoped>
.mypfp {
  min-height: 100vh;
  position: relative;

  .bg {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/other/slice.png) repeat-x 100%;
    background-position-y: 100%;
    z-index: 0;
  }
  .pfptit {
    padding-top: 20vh;
    color: #fff;
    text-align: center;
    font-family: PingFang HK, PingFang HK;
    font-weight: 300;
    font-size: 40px;
    margin-bottom: 97px;
  }
  .kong {
    margin-top: 96px;
    text-align: center;
  }
}
.getbtn {
  width: 160px;
  height: 64px;
  background: #ffffff;
  border-radius: 16px 16px 16px 16px;
  display: inline-block;
  font-family: PingFang HK, PingFang HK;
  font-weight: 500;
  font-size: 14px;
  color: #111111;
  line-height: 64px;
  text-align: center;
  font-style: normal;
  text-transform: none;
  margin-top: 72px;
  cursor: pointer;
}
.getbtn:hover {
  background: #ffc40c;
}
.boxcenter {
  text-align: center;
}
.pfplist {
  width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .listbox {
    width: 280px;
    height: 400px;
    position: relative;
    margin-bottom: 187px;
    margin-right: 62px;
    .listboxs {
      width: 280px;
      height: 400px;
      position: relative;
      margin-bottom: 187px;
      margin-right: 62px;
      padding: 2px;
      overflow: hidden;
      border-radius: 17px;
      cursor: pointer;
      &:hover::before {
        content: "";
        width: 500px;
        height: 500px;
        position: absolute;
        top: calc(50% - 250px);
        left: calc(50% - 250px);
        background-image: conic-gradient(
          transparent,
          #26b94d,
          #a8b926,
          #f62e2e,
          transparent 50%
        );
        animation: rotate 3.5s linear infinite;
        z-index: 0;
      }
      @keyframes rotate {
        100% {
          rotate: 360deg;
        }
      }
      > img {
        position: absolute;
        width: 280px;
        height: 400px;
        top: 0px;
        left: 0px;
        padding: 2px;
        z-index: 1;
      }
    }

    .lv {
      position: absolute;
      top: 80px;
      right: 20px;
      width: 69px;
      height: 25px;
      border-radius: 100px 100px 100px 100px;
    //   border: 1px solid #ffffff;
      font-family: PingFang HK, PingFang HK;
      font-weight: 400;
      font-size: 12px;
      color: #ffffff;
      line-height: 25px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      text-align: center;
      z-index: 5;
    }
    .pfplistbtn {
      width: 160px;
      height: 64px;
      background: #ffffff;
      border-radius: 16px 16px 16px 16px;
      position: absolute;
      bottom: -110px;
      left: calc(50% - 80px);
      font-family: PingFang HK, PingFang HK;
      font-weight: 400;
      font-size: 14px;
      color: #111111;
      line-height: 64px;
      text-align: center;
      font-style: normal;
      text-transform: none;
      cursor: pointer;
    }

    .lv2 {
    //   border: 1px solid #6df6ff;
      color: #6df6ff;
    }
    .btn2 {
      background: #6df6ff;
    }
    .lv3 {
    //   border: 1px solid #a46dff;
      color: #a46dff;
    }
    .btn3 {
      background: #a46dff;
    }
    .lv4 {
    //   border: 1px solid #ffc40c;
      color: #ffc40c;
    }
    .btn4 {
      background: #ffc40c;
    }
  }
}
</style>