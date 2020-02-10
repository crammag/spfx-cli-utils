
// Read config/config.json file
    // Loop through the bundles object and per each key on the object, loop through the components array
        // save the manifests file of each component

    // Read all the manifests and load it on memory (they are simple JSON files, shouldn't be a problem)
    // Apply the requested action to the manifests.
    // Overwrite the manifest files if needed (check some way to preserve the comments) (but not strictily necessary)
    // Save extra data to some folder like spfx-cli-data or something similar

// Planned cli options
    // - action (enum of supported actions)
    // - fileName (name of the file to write to or to read from) (maybe separate into two parameters)
    // - createBackup (for destructive actions, create a backup if this option is supplied)
    // - path (relative path where we need to run the cli actions) (if not supplied, current folder is used instead)


// Currently planned actions
    // - Randomize manifest ids (with an option to create a backup of the old ids)
    // - Create a backup of the current ids
    // - Restore ids from backup file created by this same tool

