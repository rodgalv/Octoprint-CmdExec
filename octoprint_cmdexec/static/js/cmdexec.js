$(function() {
    function CmdExecViewModel(parameters) {
        var self = this;

        self.settings = parameters[0];
        self.loginState = parameters[1];

        self.executeCommand = function() {
            $.ajax({
                url: API_BASEURL + "plugin/cmdexec",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    command: "execute"
                }),
                contentType: "application/json; charset=UTF-8"
            })
        };
        self.executeCommand_off = function() {
            $.ajax({
                url: API_BASEURL + "plugin/cmdexec",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    command: "execute_off"
                }),
                contentType: "application/json; charset=UTF-8"
            })
        };
    }

    ADDITIONAL_VIEWMODELS.push([
        CmdExecViewModel,
        ["settingsViewModel", "loginStateViewModel"],
        ["#navbar_plugin_cmdexec"]
    ]);
});
