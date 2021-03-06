/**
 * 
 * This file contains event listeners of all the top buttons
 * 
 * @author Ziheng Sun
 * 
 */

edu.gmu.csiss.geoweaver.toolbar = {
		
		monitor_switch: false,
		
		init: function(){
			
			$("#toolbar-search").click(edu.gmu.csiss.geoweaver.search.showDialog);
			
			$("#toolbar-add").click(this.add);
			
			$("#toolbar-monitor").click(this.monitor);
			
			$("#toolbar-history").click(this.history);
			
			$("#toolbar-settings").click(this.settings);
			
			$("#toolbar-print").click(this.print);
			
			this.listenLogWindowSlider();
			
		},
		
		settings: function(){
			
			edu.gmu.csiss.geoweaver.settings.showDialog();
			
		},
		
		print: function(){
			
			window.print();
			
		},
		
		history: function(){
			
			//list recent execution history
			
			BootstrapDialog.show({
				
				title: "Recent History",
				
				message: "<div class=\"btn-group\" role=\"group\" >"+
					"  <button type=\"button\" class=\"btn btn-secondary\" id=\"history-process-d\">Process</button>"+
					"  <button type=\"button\" class=\"btn btn-secondary\"  id=\"history-workflow-d\">Workflow</button>"+
					"</div>",
					
				onshown: function(dialogRef){
					
					$("#history-process-d").click(function(){
					
						edu.gmu.csiss.geoweaver.process.recent(20);
						
						dialogRef.close();
						
					});
					
					$("#history-workflow-d").click(function(){
						
						edu.gmu.csiss.geoweaver.workflow.recent(20);
						
						dialogRef.close();
						
					});
					
				},
				
				buttons: [{
					
					label: "Close",
					
					action: function(dialogItself){
						
						dialogItself.close();
						
					}
					
				}]
				
			});
			
			$.ajax({
				
				url: ""
				
			});
			
		},
		
		monitor: function(){
			
			if(this.monitor_switch){
				
				edu.gmu.csiss.geoweaver.monitor.closeProgressIndicator();
				
				edu.gmu.csiss.geoweaver.monitor.closeWorkspaceIndicator();
				
			}else{
				
				edu.gmu.csiss.geoweaver.monitor.openProgressIndicator();
				
				edu.gmu.csiss.geoweaver.monitor.openWorkspaceIndicator();
				
			}
			
			this.monitor_switch = !this.monitor_switch;
			
		},
		
		add: function(){
			
			BootstrapDialog.show({
				
				title: "New",
				
				message: "<div class=\"btn-group\" role=\"group\" >"+
					"  <button type=\"button\" class=\"btn btn-secondary\" id=\"newhost-d\">Host</button>"+
					"  <button type=\"button\" class=\"btn btn-secondary\" id=\"newprocess-d\">Process</button>"+
					"  <button type=\"button\" class=\"btn btn-secondary\"  id=\"newworkflow-d\">Workflow</button>"+
					"</div>",
					
				onshown: function(dialogRef){
					
					$("#newhost-d").click(function(){
						
						edu.gmu.csiss.geoweaver.host.newDialog();
						
						dialogRef.close();
						
					});
					
					$("#newprocess-d").click(function(){
						
						edu.gmu.csiss.geoweaver.process.newDialog();
						
						dialogRef.close();
						
					});
					
					$("#newworkflow-d").click(function(){
						
						edu.gmu.csiss.geoweaver.workflow.newDialog();
						
						dialogRef.close();
						
					});
					
				},
				
				buttons: [{
					
					label: "Close",
					
					action: function(dialog){
						
						dialog.close();
						
					}
					
				}]
				
			});
			
		},
		
		listenLogWindowSlider: function(){
			
			$("#log-window").slideToggle(true);
			
			$(".btn-minimize").click(function(){
			    
				$(this).toggleClass('btn-plus');
			    
			    $("#log-window").slideToggle();
			
			});
			
		}
		
}
