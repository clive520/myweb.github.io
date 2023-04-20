						// Set the Countdown
						jQuery(document).ready(function() {
							$('#countdown_dashboard').countDown({
								targetOffset: {
									'day': 		0,
									'month': 	0,
									'year': 	0,
									'hour': 	counthour,
									'min': 		countmin,
									'sec': 		countsec
								}, 
								// onComplete function
								onComplete: function() { 
									//$('#complete_info_message').slideDown();
									document.getElementById('check').style.visibility='hidden';
									window.alert("時間到，闖關失敗，繼續加油！");
								}
							});
						});
						
						//檢查images資料夾是否有圖片檔案，如果沒有則"封面"圖片不顯示
						function imgDisplay00() 
						{ 
						var board = document.getElementById("img00"); 
						board.style.display = 'none'; 
						} 	
						
						//檢查images資料夾是否有圖片檔案，如果沒有則"題目"圖片不顯示						
						function imgDisplay01() 
						{ 
						var board = document.getElementById("img01"); 
						board.style.display = 'none'; 
						} 
						  
						function imgDisplay02() 
						{ 
						var board = document.getElementById("img02"); 
						board.style.display = 'none'; 
						} 
						  
						function imgDisplay03() 
						{ 
						var board = document.getElementById("img03"); 
						board.style.display = 'none'; 
						} 
						  
						function imgDisplay04() 
						{ 
						var board = document.getElementById("img04"); 
						board.style.display = 'none'; 
						}

						//檢查images資料夾是否有圖片檔案，如果沒有則"提示"圖片不顯示						
						function hintimgDisplay01() 
						{ 
						var board = document.getElementById("hintimg01"); 
						board.style.display = 'none'; 
						} 
						  
						function hintimgDisplay02() 
						{ 
						var board = document.getElementById("hintimg02"); 
						board.style.display = 'none'; 
						} 
						  
						function hintimgDisplay03() 
						{ 
						var board = document.getElementById("hintimg03"); 
						board.style.display = 'none'; 
						} 
						  
						function hintimgDisplay04() 
						{ 
						var board = document.getElementById("hintimg04"); 
						board.style.display = 'none'; 
						}
						
						//檢查audio資料夾是否有音樂檔案，如果沒有則音樂撥放器不顯示
						function audioDisplay01() 
						{ 
						var board = document.getElementById("audio01"); 
						board.style.display = 'none'; 
						} 
						
						function audioDisplay02() 
						{ 
						var board = document.getElementById("audio02"); 
						board.style.display = 'none'; 
						} 
						
						function audioDisplay03() 
						{ 
						var board = document.getElementById("audio03"); 
						board.style.display = 'none'; 
						} 
						
						function audioDisplay04() 
						{ 
						var board = document.getElementById("audio04"); 
						board.style.display = 'none'; 
						} 
						