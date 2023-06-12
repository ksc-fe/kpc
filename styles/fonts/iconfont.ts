import {injectGlobal} from '@emotion/css';
import eot from './iconfont.eot';
import woff from './ionicons.woff';
import ttf from './iconfont.ttf';
import svg from './iconfont.svg';

injectGlobal`
    @font-face {
      font-family: "kpc-font";
      src: url('${eot}'); /* IE9 */
      src: url('${eot}#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAACPsAAsAAAAAUCwAACOcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACMFgr6SONnATYCJAOCXAuBMAAEIAWEZweMaxtYQ0VGho0DQAj/VRNRLUpl/18SOBnjNxk3S5YhVtDULIytKbhGHAtNYY1ivdtHkdcvhYZFwI+w7Wtdj0v4untOx880GXYZSgkBjrXb9maoe42QEplIqxcaDQLgfu+9/MtKgYFUgI9GOMDy9ihN4O1e3Zcjed2MZP/buwBQlVRAYFhAdqPp8kYtBRgrxA8IuCkN/FxlMGob4t30z7dQFBRwoYDwFFwg4z1RcIAKTnAGFE2i0WiSRpNWbcnGaDTYkI5MXtIf02HG/D+m/8cs7TKLjGm0Mes3dJkObdJuBuYZUp+AS1rM9333ex9QXtrmFtLPLMxY+B0/u6Hcspk7n7lXb2QrDl4TCVBx2FJ1Psl38jWkdfBVhZWqhMRErbU1/5uiyQJb0sLd9W+vtceOQLaCLPNFAAHtFE78ASztki4KsLTIM90NJ/OZDZgGwJt/neYq5Z4OiEs8LHe3Tvpf5C9ZViTDRVLQDjkOyYFGQXBKDJLu8p51aB8gDGNpWPo6DunWsa9Tx04zznOHsbqmBDosSVAqLb3+8j8yZ9+H4Jh4aNEKhUgGIyFEwliO++MJAUqGLAjX7nqggNr+5M4adIvZe+C2hv3F+UkoLIo4IgRZOSW9jGP4IiWeRg98uu+HXyNBQ5RE2HceN++cgd//lP+Du/67QHpz3gjgPEIWEswKVsN/dPsTr31WJAfVkgfjOBZg4fMhcI5ifxVOnTl34dKVazdu3bn34NGTZy9evXm3a96CRUuOHDsxoN+AQUOGjRg1ZtyEJpOmTJsxq1OXbj169WnWolWbdh3yFShUpFiJUmXKVahUpVqNWnXqNcj++s3LlSdLJJZIZYQCQoo9V4BMFYx3CDhwCkE4gxCcQxguIAKXEIUriME1xOEGEnALSbiDFNxDGh4gA4+QhSfIwTPk4QUK8ApFeINSlC/JALuowB6qsI8aHKAOh9CAI2jCMbTgBNowgA7MoQvz6MEC+rCIASxhCMsYwQrGsIoJrGEK65jBIOawgSXYxDJsYQW2sQo7WIMJrMMkNmAKmzCNLZjBNsxiB4awC8PYgxHswygOYAyHMI4jqOIYajiBOk6hgTNowjk04wJacAmtuII2XEM7bqADt9CJO+jCPXTjAXrwCL14gj48Qz9eoIhXKOENyniHCj6ggE9I+IIMviGLH8jhF/L4g4jF3kzXL3yc1/MNQjUtn3RtsAPxyo2QER3xMCeSAIqvQg5AgNF6II0QAkBZIKRHMWQVqJqb0BqkEyTVEZAd7sQy8U6Oo0qpcles4NmpCqE1SwQF/dnVqR6VXqUR1d3rkWMrq+lznpq2JHUbC5x2JzZjFkiCc2fvYJvG18+xf3eWIJ2FFTGn1SWpEfoFLLyTJaWlMJ5aZJrQikoDh82q5nw1cHa3Sc18NBA72+b5w9BlZS0wbyQeZYhX/X+DnYII2nbjVUuDR2lUj43Hyn0ZVK/XZA5TN6rifsNsnO1PmqaJS6J64iIFsCUHSayBkboWZxG8BOBVtXA8nX7gz6ZmDUhDG73K41Fh5wOaogrOLG1868VzX8x1iR4G5wJMBm0ho6TzRBTlUkLzdwDIfU1s6Aeh+2ArFMr+ggn9PCFrSPNKJjPUmAODJonQ1JEWgWo6aFhqc7IJdSbbSG8yhbuQhkCkMD7/1VxWKmpJLhLyxVaU+NiQdNTIMDxH8wS8ZUFFrsyBIIjkBAu7UZ+TaSi3/c7G1i4FvsaARIZAUHikOl0jGFUaqq/h9zKRym4Iz2ZfJ/Iq0XxzONsorc+shpGbkFoGEH+eEubyguMoW6+DuYwmlSvWnwZIZVEMIWtg0OhYWRMOh2NpkCF3Rc4ANelgA6PTWP+PV31MOaZs/mD14PJn8ztXf7uT+ncLu1f2zx3tmtO048tLvKJvTnGGlkUnveri7hcbksCsLC3N4cx6e4M1SPPKq/KevDDgy+u+doRrZRmNPNKsJYvpcBSv+oq+JmBKWElDqbIcJspW4Mub3j/zTLDiNWFduGmpyxwoDc35SxMTU6+7zrgkkPiohWVOKB0TCrCW0B4hFwFgMj0p56k8QIaHwZXtaxgRUc3uXDdWbwxObrXXVYsBRzRXNmAwY1I6WHhOXmxzNNf8+PrTA8TIJZ4dM+AVgWioqEJ55tNG18BdeL421e/GttdbaH3VIb3pyTODlSdnuFnQdmL1GtVpqSFJtMQQ5VHOWXIEZuuuoD0bzFdz0YIKTUmtPIyuH/K/wYGww93uHLb4Da91pxLLetApz09KQ5qemd7r7VWX5pY+mfhEnpKc0uXqCv903ekqJCciW3L9uFoP9XjyiC3UcwbfXDs8DIwlKY5iRwaWfcy3b6t3ppqmtM2wTE5voH/pB2P9Vrs72Tq9c7ZTZrUbKDDAYyc50KdS17lsYmo3T2a9rpo83lSKKkCah+7iw2oNpuo5lCcMITkbMCXOs7JvDroozSyHghjSQTurmQAAHmcWQgsJ3aAL+0xzv4XSKqs+NMUEUfkGOwVjCUwoyzntaIZ2AEaRCYEurKy5hJocyawDGYRSGdG4ssjEaZk80zJwxGgob+h4S5FzZJgcg1UoKZmYVKacw5M0g5XHLaoAhRI4uxQEueDqDqBPgZs8c21+tsGEbPsuSAayJhqAH6w2yCusUfFPjX6wn8bPrFkgMnyLHKf+7aHUJQ9Mwk/2Jcj+il37IZulP9pF9nOb3P7FjWlKyNn9ye781awy1o73GJuTdTaPC/HGt87EhYWOMAw72ZhNUcdH8Z4WpBXoDLcIYVGWzkOHVYSCTFq/CzaS1HbpORdLNpqVXscSmXCd2QpMwyPUkLOVvJaBMGltFHSEIHJ6tHdloTBmRqfZYB551MoWEtT4pmx97Ui7s24jfSj988jQmj6iaafYsqCCaz9Kx7IXZNvI1pxtgqVtcfJ3/dbtYWtVVkCiqiu8DCyapfYtI4VV1jtaE7DsoVMwslVwJ6WCb/dyQFZhQBCNxJDzt6Op6vQohDqkh2lMSZrvgFwqtsHDYaqpw/KQqCZyC49annlqN6jZqk7ddT+4dri1ozr3OEHO+oh43BavN5rwCmYGcTkXeXMN/EfKDV1nkbC8M6VIa4VRGj2BPDTHhk22BgVVjxgk2LwPzpUFAweo5gBjh6eS0mXGTuZ0e//uSjovssmjvsIQF0HLc+ePEwSjqTQb7PvUAmb0i/02Ll6wJVFVYsvT/HkETH0pMpwUpF84sLi5qJKzZC9Th/ypRURAWMIRAG7RsBTcujseId5mMjAwxG0vDWJAh8qqMKXa+MNJp6HMDgNphh5JV2R03Cq/NWhmBgs3WtAQ2mTq9hw3M+xphdUsANWLsv1DCVB7JTm1k+k3UXOpDmB03Kpk2zRlpr5y+HitsBmx2LZp3BkUoogFnrc3kgh2Sn+4G7a7FfSdEAqqIt3pKp7yWDb5eFQeTXX40g8nPDwMNM2k1Xy41aDIrHMuxWvt0ZMBPcsv0zjBbjfrw+qHdrntvfjYoXR+ihpZoqVorh2YNp+WTOErfJDQ9kh5WR4hu7pcRd/AnzslCXq9fRY06emksVZl8rPJrasLywtYWXe3u39uamoKTD9d9SRG+6kKVwuK3rQ9CY5CQ6isGM4UhPqGpB4qKluA39t7/IpAYo76PY/Hq17ljJjB/mRtkH88qBwHqur4ytNPPjXiuhz8VtVcSTYaLfo0H3GkrOWv2b/WTs7+b3bvnx3oSCNDuadLbz2FGGhRWgfV/mZgPkf7EKr9e1dCpNOxv8jol/PhiupmYedKDTLNo4FGdJpNZV0nrzH4sE4ClpIX9EZ1a1AwO5X3sF7VxVIDK92PsYNgqBrr83hN56BfvQ5nQKPmVxKgUK+BTMBS/l1+Kr/UH/L3aN6evNMsVGabeS3zyn2urCffQiwb6L6VJidJ8r1nhyBFqg1tDeVSSj147cXxkOGSnfhibvNaXeWFd+7BZnRj/OP23u0xA6l3VAe73XhRX+CV+ZOhcGayIpGjj1183GPwqkugChm3Yky1n5vjr7Tkz0w2g/3O/E0m/HlravTLj5eem5veO1vtfrlBiw/OGLwPpAZr3vCPAjnROBPlxaQES4BNEZv3Op5PX4xUfdCCXExxPlNLNtX31wzB8fpalXXWWzwPknGOR/1yz87fGiO1202rM6AahQuR0TfTKqLBqtLVpP1RB/CREX4Gf/bzgfKR0XxnLyFUJr4xccZ0FKPl/HZK3JSFa+xcnYenu3Iw5+L2cxj71PXLnC04WL+ZCbg/VNRzPpKcIbJwHe+HBx1bwOZ/V7FXGkVAvdrK8G8PlQP5QC2oKmxeEORzOYFzazm34wWvasLpwMayLTMyyRKhgRvZXX59sOTP+Yd8QqZzjdqimHgwbuFVYKnovFH7GrymN6SuFFNcrRvuIUe0RGDlQHWV7ZK+XFPscuJlSt/y96/k0tmJDK6vBPkzUrvdrQTJrHh72BnvlBmUFF3Fc424UDxvfx02XyJ/SR4qQGno0dNq8yfOkCZPaj8SyrWw/u93M7UpJxp8ZTSlqqL9Y6G+1ZxE6DIGpysnL9J7vAIFm2NY3v5Y+j3osAGqyOuN2vBmIER7mam855dsZVdz5T3fRynG6iWF/Zg59vIQSLOfPLfTLvWwybRDGBIr3CUn0niia7dPLFF8uhfx5dRtZX9CxjXPI6MQRouet2AZk/nP1DFL0hiGrmT8/SBX/QaLjEzLTpoiyl9osIi3+i9r7outghHFlw/zHgcg5dZBL+h1btdnvt8TyWezuJTKqPC1AvBAvz/oKbGyEWrOR4f4sCpwsutQCpNzoAQIdxFnGTAo2l1EQRnRVAoKCir4riIa3rFtaHycDZXGZ6E8p9u27gifm1ePwpwSVnsSmwsKX//ZJSm9TBBmZ/AxUVdiOdJbd2xdPu0VfruoRF2uO3Z+HtO7lhtTJPD4rCdrBAQKWUfC6oLF5sTjqqzV8scbOpQXMdzjaJUFZPXLJJI4gA5FgA3wwy1SQCaJbXasChQ585EaPsVSVXqdCvKOH0aNEfzvkUxMcLu+KBtwnLCyYMSgefMaLAsyg6B5KSYEkEm8l6h81yfhJ3ekDt+P9DguD2zApGOj35vB92iJ6jguqU++/dYv75Rw913fuj4H6T9cV/K3A/TE/xOemhA/8a1ftdRMer0kg/HD8mTHD8BceoWz6B+M6fqG//XmG2EPk6YA8SFjEocl+QXhfTvCyqwQT4bv2B6u1wctH4tYe8cCfqdPBvyNBvrWdWWgW3QBN1B9La6QVBUEPAo7FnvoQAgzltWRNoKwkXUP1HWEzUbUkeNz1TUkWaOeO04GjOoqE2pHhTMcwyVflVmmnb+WZxesYVY3UjJLNO0NaAlq5z/byHaekwRo/Lra1HNJm42cq57Ue7eRpE09dzKw/iOBKjpxJpZOjI8T9Nia6ljf9xDv7cXpKuALbmPiDNn7O6DFNtxpBF31M0LVFaJX5Aq1OaSoO/8Z78pGlljCjUos00cwX9vb7IgVwzxJcU6YlViqzxcnSoviE421fuATS+jvckO579JDrEJremPRiGhRkyg+y9UsTc1zT2SiGgkS3wvsxCsTdeaU4uQat60uxZxc7K6xzXEpWafKLAXPbB7t/8mLf68PufjbhvYrlT9Nn6hclq/xnv+v/c/DsNP3Ke0XQaBup2Ex/4ktOOAnVbg7a/2fhziBFOxwb4/yRG3f5WZpic4szrpxku0bn1WUgSO/666o8gvZhsIAOkY/sJVleF0uuivJzqmYltjgEKZ3EaIQEggbXjTJDAlOa/rtWOdFHyX1YMZnoRZ5n7w5NP8Z5ql1eq6BtPZw3Ysijf6FoQudDsaDux3bafTVwUd3dkzumEBffsJvOBksCnn5zlnBJNM/C259gTINvV8UxeY2ff5gPLLDdHUtfzU36rZll2n1LMcpxqDJNd4j2fnLxbXpjSvLvnaVEbDxo+hwjXj5+IPPOY0idN+jI7NERCj0G9mthAae+Umk+t39zhafp6PEdizr3oM7XO4q2bKrFL9m1S87JT3jrrKVjelr9zQOMRg7V5B+E7PN0gVMSYCgyDb7e45343EwCEZ/g/ou/lJywrXFu2to71BvpYxNiQ8aiNInK+2KlswmjaYps+UnkZnZpOmJf1odY1oPyc9uCa+xiGajJKE/90RYspp4sxEf5HIERpYsWqDgWJuVcCasbLZyFJnrpFPs3Xfe/TKU35xtC+egJolWj0zEMJdjQjn3+QDDSHmQTY74RYbZd1kjenpGd+f9GbLeHnYwwtoe0O5RpAXQfLCPxkBEiBAy0iAt+t2pJhlAo2JmaLUy8KQ3P4hYH7SeyMMCUj9o8Xhym7Yjm/mbRM95FE/G3y3SpyfCGisSF0siYTSv5bJqeIR4dItARMIuhAN/GeEuMrR3sEtzjCTMRrowzEgCZIR+L/f0Ye5YxIFhbqVxeTd3lLv7MugQMv2C9zJZzFEnzb3BfkyVrQ/hQDJEqOgjOBh5KnDCu3sERpugYQSNBtJUj70ctSV8v/B7gVl7EoEgMhesm9pprVl4VbA/Ti1Bf0fsqBe1I/tRQ49nBfvrHSQB0vNGzRTKZaIhgYGBwQXCXD1ZGIdwloaR1llECJ49IwmyipwkHa0luj2SPSZdIWNLAH2Xf5PSuqU7hv2I9oC8sa8gXqdpay78nUhnNIlkEr+3qKZNF29ejY5HzRPZyPzs+Uj27bVVPGaMkqSSdXXkK9pFsi413vVFe2hgfmd+INAouyQCvTEGyil7/Wlu3A6zeFq2AjLOGKdKpjaIefvQIEJbF2VaUxqtnU9wFFpLZHE2p0UycUwbcqv7jRjhYQKqBd4lEBvpgEWIFoKQjsNi/hN+uuym5qZME32DEoS6Je54597ofZx6kUYe/4lmpUe7OVtyRoH61uPJUkGShmFBq6wi3g3035oDH0RrESwlx/tOScWziATWGeEx/K713Lsrhm0ro0xgWwYCYh+qxbwYNqYWU6DDERqiFJq7BHxcbD0RVJQ6b6E1o8y8pEaX1Vr6aq58TiyLFenIda06fdtqccGf2hz07u8/r24n3uZeCopSmaxUbsi2Kg3V5o8K1QaFXmsxKY1ZVoNcVloqk0sLY1/7l3Dz8/x4oG5oANmOsqwW9DVdw6L0jMc1NQwfYxBo3/fuVNomS/Li9LGb9kCFkDnBIMnpLy/7A8NIBKrwTo9P8ryD4ZyIQS/vOjmCE57ei9aogCXBJxmb0aGBW/8SiX+750NN3l3iskhFgNAwFoSp8pChQBdOc+hH6FJDxDL9+XlKToki/RQsRYgCALJxL0n9aP9yzKn9KpNo10NyIoxtyXR5kluOy1YXNKssiqoqhUV1WaSfIkWVytJcIFt9/OHV5oNfeFyZRCQmh/TtRGq/6f5WC0iOLuCbyl7XLkxvXKBpzvhxoXZBevqC2WhFGd8UXbApRCfE27oB3E8EkU0MD5/iO9EwNo3m+aMiIsX3/WEr7qkAeJovdQDuQ3wKY+4w3wGwpZ1g3mvjrR3jXVjDax1XAe9Wja3ltd1T3Q6djgg9Lz8kf/D5KYIZjOONt/LWXMCiDQo3orod9sCoozgMgqa5OUyLe5DMk+JRHxg/SMKL0w3G43xce/zGmqbZidgtSbiUzDuIVy6OOo6PRJNDWe6JIoJwrEY1aThAQ/xjEBBycMjSAb/3aiNYclZEyHfHYo59p/HXRm7HRwav5LcNYNBBhE0lT4Ux762NXnvPyyAvAu/8qxCvGxmY0hRCL34IlziWWECVsqW+vUFyGd/XjYruVSgLlQDuxfehjqiz21zfAYj3rz5vS1DkVUgU2fWZP2at3HZ7Z9F0vrFBkpq7XJPTkN6m5/fwqvgUr5NH8at4PeGUpRMJQWvPirRSReJ+1SQ/ilQC30rNvNTUea+l1s5TvVZboq5dqp4/+VdapUQvFutNc/W4yRxdMm8osWPxkC21JK0UmqfqTUMlNWuLYkviPjZJiuJq1kKFqMM8L600tWTIBjKURy2qJv8om+C8iFPfblU2BXBEp/G2ZmVVwNUIZ7OtkE0IvycWaHdkf+GPc1UbPaBQumXr8EYbty+vDQra0vUNyzUbhPSSraLAH9CqBtSwehN5CW0tMzlNdcsJVYUipVKuUlRWpChUFcqUinpFRWWeXqmw9I7ujlln/kr3VWmFeHDDmtrCi1e/iOV/8emGlYc4tHZif0q5IlVWufT0za+e1tbann56ZKYm9fm1LMGcqCEQ7zoNUbYU6eTmol+LI8N7xU3VjXtLG0r3NlY3iXs5kWZ0+Msfzm3bSBWudFeJeyO4pVFMFo/cgFSERYO04QOO7Yv4OB84vtnxvil2S2LsH3jSlhOoHcme08T+zVQ/NTLS76Sc7ry0KRCFfMQ2WOE8i+Rl3XtWWVGK6aSqNrHYqG9ebJ/oE8EtcPFta24eIuqbsC+25Jvjc8m5VXWykuQic1Jpcmy9evtfJy+OTSHbO3MX+3SG2JyksreKVn36YtuLT82qADHKynSfzU8wJAirIF0ov+LidSd9HWl3yp12+ZuuiLgsMDjSJ0doiFDoxhHKrQTC9vsVBEr1Sw7q6d1gAsP0+5n2YG+wnblfE2lHELjfyrHTG0+3t6LhSAQj1g4REBuk7h0lMexkx6AzRAe/n38Us+gc5HhGXqXNxqYTYdO9/jjLj7zYjtEwEqONiTa9VJmzg8m4mDEagQJB63KGzsNYfFJiiImGYiHPsFsr9XET8xOFVZIpVV7LE2YlhOn4pys5x9JPFR5KtGum33jzJ/Cx8FVenIgbVPMKYwGvmhfg47xq/PL9q9siDVPXCi91N5YeuCMUIuv+eFAwvPPji+89Wfo2QnEpWXzCuoxC0306X3XzrcFbTI4/P73b8J9koQjZtsXpVHf/NX9nHL958dzUxT1QM//85i3BW3/mSHCxISeuGFqPJNunFOfDF/1H/erjN/GZevw64gigqExj788P6+WxdclQ7rkdrE4TqB/ML84wIlLkT+ayMey2f4xSuAQi0JBrcJJHQ4RQHtl00RAREjpPhllvKxiNpUiGSa4nQXmHJApbRryCHh7J6xG4e6DQ6583/NEwQzzf9sc2kN4g6e3rXjKgX6iyDofzrapL1pD1UiDFhXkrU/5wudxOKpD7UXGlqzzBmJR/UIaEXFfpoKt6ZSYVvMqMCXku80vgcOhk71XreNUbxy4SjZM+eHkiwKd7TXwUTsOfK7+BxbfWwc47eCXBldhDIr7OJSZ9Q8nFUvN/rRag9whqRzo7JqCo4zIFjUfGdSJjkM7fDeKrV3HI4cod4/wGoa5HaEgbc1JUs/0AKeryPwT4IsjpvjXhdtpsTjfl7O/r7adQlHI/4/bZpzBmxA9AsDAvj7/RVx9mHjr7G+pv6MuD84qO7cKKd5oKSpOWaJqj/l0OI+FYywy+Yqa7WF8c16ic952sGEITedjmvET8Cbc8+HZ10EvG/ftTg1yJWN/r2oVX33nvmZfhY7Q+6vBSDNCE19U3f9y4FWhvbjUcuqYUxm9ti9NWxwuV13zOqP5/rqnk8ebU/Kii6LffSTdpUNW7P7bZcgeTSW6Y1XMdYg7f9Qf4N3p6mBm1+c8iEUv0d+MmROczz+ekhWUOlF6O1jZavdTJgQHN2SJnP1DfEjbKqy2qanJxbUlsIc58YoKO72i/vZ36N37MxctsxUkFiRLDpxhnJi8yf7alcZTpA7qzTWgsAW8iBXRTthAJYbaiIjxYS1I1BNKbGJNE4NSVoiwl6+i+AOVWsJfAUrD2gpRd3xow5b6iy1qyJHOtXqBtXXdNOUunmFlxwu383U2dsEmTTSXS+SVJSSX1IpMcNWTJJeCEeOzOTuG/i5Zd6ieWwUJ+iaD8o9ZGWitcaQbK3e92H7Kn5BWW54TAft0pdbnriDOWG2mHWtAwkL5AGJPu3evlHMQ7lFBCC8uacbodDm8mHu9NFWim5xafCMpAyePfdHg8zn6KaoVpN6p/oN8JHLrf3c5bE/cnklAp9xE77P7gXsMLP7nGvHdpzPCRZIdPYyOBcYyGwBxmg9mPftXJZYDh+gFsRMWL7tO/eGJ96xE6XXWDQYJq3yoAAG8aWjdIevom6D8zGw4NA0OZldOU+9EEAN+K25nKU9ETRNBFg470OyckIrdKMU4YfwgO8AV11uHNK/spVcOPWFn9A4Mk93BJuMAeQ7lNxePu2gB4BvZw2dxPfIzYw2XA5R9VsYi7nxoQuYGTcoPfubCIDdFAFMV82MgXaE4DrStxloGNBsaMjFUnIZjNTkr0WwAEtLBgv7+ccBwM9MIQGoRiWOgLNtKrvXsQx5MSmYXjLYIEDQACgAN2HBr8b6ds0Ga5m+MHs6wCHAffGSgxJI/NfsN8bMUCL1d2vofnzofAIYtw/B07KwQGpYnO/TOrYLUABFhmO4AB+OfRxUuL/Cmc3QuLDX6I3xSAwaXWJwvHpxS6dCnCGaR+WghgMDb2w3McZ0rtk1HKzcaBqlttCbFs6L18eQ7Lsiiic/r69DnfJnBmE47hH3548tkviVcEnMHTOj8RBAoQJB1BZrcM8keQQojtlw7AqMypgQ1wpCOWu83AbBPOptMB7+QpFeHf4KJE7OQoiIEfdyO8uKizBu4tpRAjmKnLfU5/n1zI4bN/ZP8AgO+ntA0OAcA3DW+GGQD4Zl39p/RuFAudwTUAgD+B9i8ZhYVwTuw53AdHJCW6k5yyDQ6NjcGnYS3ptP3Q6Ij62ChMwnqUfg56PNNfhT5NWqzNgtimL4A6XXEXib4N+hpmjEKTABX2eeCTSbUTbRz0PpRNCPU/moQ+EV0fhZ5ARhergggA8KmkWNSyR/AYHDXlTZi+5EVywEHaCDxfJiCDsEiWZTNpIyzgT4v0QHzfqjTRt24XwMr06P9Ba1B6G/QLy4B3VcPK1tG9o4wy7QlcCwCYBsVHoKPQRv+MPChFcMG0z6BjfJdqATzKDR0hCcIMVn0UegTi5TKbNg/q0OXQQkP/FbL79UToKEwL8/t3Tgw0AN733CC0/f8cOgPhzYGl9cGZL/wDEWA/43G3tcRw9o0gAM4JBigIgR74/4SfcST+AcgsCuEjRvWCc1etkQ0L+NllNxzAiQAffiBbjVzhIvTPyGv2UR45LRhqkLWg4YoooxYlFNGCMkD0XJGVawTlgJi/oqTX+sbLSh1LgrgIxp3AFYEiZ1eECpyjCIhrFAPxeEWiwidKgfi7IsdxDgeMHcY8QdNnIEcc1l8DB61Jq7vv9TdyF7J16X9YYy8eHlIUvyt/ocLicGnveeWehmRahp/W9kFEh9n0BcGXk/v8eCdvQaW9DFoWTwwQB9Fg7et8WxaoKiV2/w/vN8g6QYwQ/x8zDcN7HzxYuifAfwmVqFNBzM27bMUNNRmcqFHlKv5kU0GOMTWY0Wt6AYFbmhiis0d3RqJEKiyzF0tLIKKDXdhb8BFAoiQrqqb7N/uX8bRsx2WxOaFh4RGR3KhoHl8QIxThsXFiSXxCYlKyVJYiVyhVBJmqTkv/kH26MjKzsnV6OXLlMTDKV6BQkWIlTMxKlSlXoVKVOSz+68jG1ISNvcdB6+iUt37qBNGK04WZa1Ir5GxWJBY5RL37B1nlmoPXbT0EtEbsx2CmNieOSt46WlyDHKTRnodQj7wtmLluFk9aELYgdN/Jb7B3rW67sdVzWIUzFBdiSbRqphnmecakFcjVFTg3ICErl7WrOicOhVBfuwtXZKODLAHpgo9Nu3PNbZzU+FurkwiIimpyKUMNaKLzeVxsEUYN3u07j/MkmTpzCAliG1TRTCFtcOmTPL5mNMpnPACVlDgHwsgrainBW6sxsAVBTLheUomwXb1eRcPr4dW9wQ5ISkad8WDgYcUtXwt9BSL7LgalQjbxqgiBqx8S3ddqV3zWD3YlqJE4e4cGsjCVFulcBmwVY4uv4Fu1wIBdb652fwyLEnVhQyrduk9Fw2lfLkfEWP+dG68F4bOcS31DMrSpoMrX5GHiNcFupLRSMjaHKEaEo35UP1tKFoLkY3vrZMaKRlUPNqT/IRW7lvbjZbeshlaQmX5QM7kbeB5OxdH1mhKCgZVPQRrMdpWHz7PmfJwA2Cbez3CwE/4A1iAHYZyOPErNO5x2iSfaFWGQY/lAvP03k+i/cwPhA7b0gPXcKEwIr7sFog1ExF4binFshaQVeZfCtbctwgEHSKWN6/47jCAmZbEAAA==') format('woff2'),
      url('${woff}') format('woff'),
      url('${ttf}') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('${svg}#kpc-font') format('svg'); /* iOS 4.1- */
    }

    .k-icon {
      font-family: "kpc-font";
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .k-icon-tag:before {
      content: "\\e9b7";
    }
    
    .k-icon-clone:before {
      content: "\\e9b6";
    }
    
    .k-icon-information-fill:before {
      content: "\\e9b1";
    }
    
    .k-icon-warning-fill:before {
      content: "\\e9b2";
    }
    
    .k-icon-success-fill:before {
      content: "\\e9b3";
    }
    
    .k-icon-error-fill:before {
      content: "\\e9b4";
    }
    
    .k-icon-question-fill:before {
      content: "\\e9b5";
    }
    
    .k-icon-information:before {
      content: "\\e9b0";
    }
    
    .k-icon-cloud:before {
      content: "\\e9ac";
    }
    
    .k-icon-pin:before {
      content: "\\e9ad";
    }
    
    .k-icon-home:before {
      content: "\\e9ae";
    }
    
    .k-icon-cut:before {
      content: "\\e9af";
    }
    
    .k-icon-servers:before {
      content: "\\e99a";
    }
    
    .k-icon-internet:before {
      content: "\\e99b";
    }
    
    .k-icon-mail:before {
      content: "\\e99c";
    }
    
    .k-icon-paper:before {
      content: "\\e99d";
    }
    
    .k-icon-phone:before {
      content: "\\e99e";
    }
    
    .k-icon-panel:before {
      content: "\\e99f";
    }
    
    .k-icon-alarm:before {
      content: "\\e9a0";
    }
    
    .k-icon-notification-outline:before {
      content: "\\e9a1";
    }
    
    .k-icon-earphone:before {
      content: "\\e9a2";
    }
    
    .k-icon-settings-horizontal:before {
      content: "\\e9a3";
    }
    
    .k-icon-message:before {
      content: "\\e9a4";
    }
    
    .k-icon-heart-outline:before {
      content: "\\e9a5";
    }
    
    .k-icon-return-right:before {
      content: "\\e9a6";
    }
    
    .k-icon-picture:before {
      content: "\\e9a7";
    }
    
    .k-icon-logout:before {
      content: "\\e9a8";
    }
    
    .k-icon-all:before {
      content: "\\e9a9";
    }
    
    .k-icon-drag:before {
      content: "\\e9aa";
    }
    
    .k-icon-settings-vertical:before {
      content: "\\e9ab";
    }
    
    .k-icon-more:before {
      content: "\\e97d";
    }
    
    .k-icon-more-circled:before {
      content: "\\e988";
    }
    
    .k-icon-folder:before {
      content: "\\e994";
    }
    
    .k-icon-unlock:before {
      content: "\\e995";
    }
    
    .k-icon-user:before {
      content: "\\e996";
    }
    
    .k-icon-folder-open:before {
      content: "\\e997";
    }
    
    .k-icon-lock:before {
      content: "\\e998";
    }
    
    .k-icon-users:before {
      content: "\\e999";
    }
    
    .k-icon-edit:before {
      content: "\\e98e";
    }
    
    .k-icon-location:before {
      content: "\\e98f";
    }
    
    .k-icon-delete:before {
      content: "\\e990";
    }
    
    .k-icon-edit2:before {
      content: "\\e991";
    }
    
    .k-icon-settings:before {
      content: "\\e992";
    }
    
    .k-icon-calendar:before {
      content: "\\e993";
    }
    
    .k-icon-search:before {
      content: "\\e97e";
    }
    
    .k-icon-alert:before {
      content: "\\e97f";
    }
    
    .k-icon-question:before {
      content: "\\e980";
    }
    
    .k-icon-zoom-in:before {
      content: "\\e981";
    }
    
    .k-icon-zoom-out:before {
      content: "\\e982";
    }
    
    .k-icon-fault-outline:before {
      content: "\\e983";
    }
    
    .k-icon-truth-circled:before {
      content: "\\e984";
    }
    
    .k-icon-hide:before {
      content: "\\e985";
    }
    
    .k-icon-visible:before {
      content: "\\e986";
    }
    
    .k-icon-time:before {
      content: "\\e987";
    }
    
    .k-icon-refresh:before {
      content: "\\e989";
    }
    
    .k-icon-batchsearch:before {
      content: "\\e98a";
    }
    
    .k-icon-refresh2:before {
      content: "\\e98b";
    }
    
    .k-icon-upload:before {
      content: "\\e98c";
    }
    
    .k-icon-download:before {
      content: "\\e98d";
    }
    
    .k-icon-left-squared:before {
      content: "\\e975";
    }
    
    .k-icon-right-squared:before {
      content: "\\e976";
    }
    
    .k-icon-down-squared:before {
      content: "\\e977";
    }
    
    .k-icon-up-squared:before {
      content: "\\e978";
    }
    
    .k-icon-arrow-right-circled:before {
      content: "\\e979";
    }
    
    .k-icon-arrow-down-circled:before {
      content: "\\e97a";
    }
    
    .k-icon-arrow-left-circled:before {
      content: "\\e97b";
    }
    
    .k-icon-arrow-up-circled:before {
      content: "\\e97c";
    }
    
    .k-icon-arrow-up-big:before {
      content: "\\e962";
    }
    
    .k-icon-arrow-left-big:before {
      content: "\\e963";
    }
    
    .k-icon-arrow-down:before {
      content: "\\e964";
    }
    
    .k-icon-arrow-right-big:before {
      content: "\\e965";
    }
    
    .k-icon-arrow-right:before {
      content: "\\e966";
    }
    
    .k-icon-sortfill:before {
      content: "\\e967";
    }
    
    .k-icon-arrow-left:before {
      content: "\\e968";
    }
    
    .k-icon-arrow-up:before {
      content: "\\e969";
    }
    
    .k-icon-arrow-down-big:before {
      content: "\\e96a";
    }
    
    .k-icon-sort:before {
      content: "\\e96b";
    }
    
    .k-icon-sortbig:before {
      content: "\\e96c";
    }
    
    .k-icon-truth:before {
      content: "\\e96d";
    }
    
    .k-icon-check:before {
      content: "\\e96e";
    }
    
    .k-icon-close-big:before {
      content: "\\e96f";
    }
    
    .k-icon-add-small:before {
      content: "\\e970";
    }
    
    .k-icon-minus:before {
      content: "\\e971";
    }
    
    .k-icon-close:before {
      content: "\\e972";
    }
    
    .k-icon-minuss-mall:before {
      content: "\\e973";
    }
    
    .k-icon-add-big:before {
      content: "\\e974";
    }
    
    
`;

