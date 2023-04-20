					//檢查是否所有答案都答對
					var check=document.getElementById("check");
					check.addEventListener("click", showMsgcheck, false);
					function showMsgcheck()
					{
						count=ifright01+ifright02+ifright03+ifright04;
						if (count == 4){
							$('#countdown_dashboard').stopCountDown();
							window.alert("逃脫密碼是："+passwd+"。恭喜闖關成功！");
						}else{
							count=4-count;
							window.alert("還有 "+count+" 題等待破解，繼續加油！");
						}
					}