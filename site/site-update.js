const { exec } = require('child_process');
const fs = require('fs');
exec('git submodule foreach git pull origin master', (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
});

exec('cp -a ../kmk_firmware/docs/. ./docs/', (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
});

exec('cp -a ../kmk_firmware/docs/en/. ./docs/', (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
});

exec('rm -rf ./docs/en', (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
});


const renameFolders = (currPath, newPath) => {
    try {
        fs.renameSync(currPath, newPath)
        console.log("Successfully renamed the directory.")
    } catch (err) {
        console.log(err)
    }
}


function readWriteSync(path) {
    const data = fs.readFileSync(path, 'utf-8');
    const newValue = data.replace(/<br>/gim, '');
    fs.writeFileSync(path, newValue, 'utf-8');
}


const miscFileChanges = () => {
    const foldersToRename = [["docs/ja/", "docs/01-ja/"], ["docs/ptBR/", "docs/02-ptBR/"]]
    const filesToFix = ["docs/Getting_Started.md", "docs/ja/Getting_Started.md", "docs/ptBR/Getting_Started.md"]
    filesToFix.forEach(path => {
        readWriteSync(path)
    })
    foldersToRename.forEach(pathSet => {
        renameFolders(pathSet[0], pathSet[1])
    })
}
// quick and dirty should await the git stuff
setTimeout(() => {
    miscFileChanges()
}, 10000);
