const express = require('express');
const newman = require('newman');
const path = require('path');
const collection = require('../PostmanData/4. APIS AUTO COMPLETAS.postman_collection.json');
const enviroments = require('../PostmanData/VarGlobal.json');

const newmanApi = (app) => {

    const router = express.Router();
    app.use(express.json());
    app.use('/api', [router]);

    router.get('/test', async function(req, res, next) {

        newman.run({
            collection: collection, // Collection URL from a public link or the Postman API can also be used
            reporters: ['cli','htmlextra'],
            // enviroment: enviroments,
            globals: enviroments,
            exportGlobals: enviroments,
            iterationCount: 1,
            reporter: {
                htmlextra: {
                     export: './src/Report/Report.html',
                    // template: './template.hbs'
                    // logs: true,
                    // showOnlyFails: true,
                    // noSyntaxHighlighting: true,
                    // testPaging: true,
                    // browserTitle: "My Newman report",
                    // title: "My Newman Report",
                    // titleSize: 4,
                    // omitHeaders: true,
                    // skipHeaders: "Authorization",
                    // omitRequestBodies: true,
                    // omitResponseBodies: true,
                    // hideRequestBody: ["Login"],
                    // hideResponseBody: ["Auth Request"],
                    // showEnvironmentData: true,
                    // skipEnvironmentVars: ["API_KEY"],
                    // showGlobalData: true,
                    // skipGlobalVars: ["API_TOKEN"],
                    // skipSensitiveData: true,
                    // showMarkdownLinks: true,
                    // showFolderDescription: true,
                    // timezone: "Australia/Sydney",
                    // skipFolders: "folder name with space,folderWithoutSpace",
                    // skipRequests: "request name with space,requestNameWithoutSpace",
                    // displayProgressBar: true
                }
            }
        });

        let reportFullPath = path.resolve(__dirname, '..'); 

        res.status(200).json({
            result: 'Generación de reporte newman en proceso.',
            message: `Ubicar reporte en siguiente ruta ${reportFullPath}\\Report`
          });
    });
}

module.exports = newmanApi;

