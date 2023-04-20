					//讓各題尚未答對的顯示尚未打勾的圖示
					document.getElementById('imgnocheck01').style.visibility='visible';
					document.getElementById('imgcheck01').style.visibility='hidden';
					document.getElementById('imgnocheck02').style.visibility='visible';
					document.getElementById('imgcheck02').style.visibility='hidden';
					document.getElementById('imgnocheck03').style.visibility='visible';
					document.getElementById('imgcheck03').style.visibility='hidden';
					document.getElementById('imgnocheck04').style.visibility='visible';
					document.getElementById('imgcheck04').style.visibility='hidden';
					
					//第一題檢查答案是否正確
					var but01=document.getElementById("but01");
					but01.addEventListener("click", showMsg01, false);
					function showMsg01()
					{
						var ans01 = $('#ans01').val();
						if (ans01 == chkans01){
							document.getElementById('imgcheck01').style.visibility='visible';
							document.getElementById('imgnocheck01').style.visibility='hidden';
							ifright01=1;
							window.alert("你的答案是："+ans01+"。"+q01correctfb);
						}else{
							window.alert("你的答案是："+ans01+"。"+q01wrongfb);
						}
					}
				
					//第二題檢查答案是否正確
					var but02=document.getElementById("but02");
					but02.addEventListener("click", showMsg02, false);
					function showMsg02()
					{
						var ans02 = $('#ans02').val();
						if (ans02 == chkans02){
							document.getElementById('imgcheck02').style.visibility='visible';
							document.getElementById('imgnocheck02').style.visibility='hidden';
							ifright02=1;
							window.alert("你的答案是："+ans02+"。"+q02correctfb);
						}else{
							window.alert("你的答案是："+ans02+"。"+q02wrongfb);
						}
					}
					//第三題檢查答案是否正確
					var but03=document.getElementById("but03");
					but03.addEventListener("click", showMsg03, false);
					function showMsg03()
					{
						var ans03 = $('#ans03').val();
						if (ans03 == chkans03){
							document.getElementById('imgcheck03').style.visibility='visible';
							document.getElementById('imgnocheck03').style.visibility='hidden';
							ifright03=1;
							window.alert("你的答案是："+ans03+"。"+q03correctfb);
						}else{
							window.alert("你的答案是："+ans03+"。"+q03wrongfb);
						}
					}
					//第四題檢查答案是否正確
					var but04=document.getElementById("but04");
					but04.addEventListener("click", showMsg04, false);
					function showMsg04()
					{
						var ans04 = $('#ans04').val();
						if (ans04 == chkans04){
							document.getElementById('imgcheck04').style.visibility='visible';
							document.getElementById('imgnocheck04').style.visibility='hidden';
							ifright04=1;
							window.alert("你的答案是："+ans04+"。"+q04correctfb);
						}else{
							window.alert("你的答案是："+ans04+"。"+q04wrongfb);
						}
					}
					
