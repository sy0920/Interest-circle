# Interest-circle
要运行 **Interest-circle** 项目的打包产物，可以按照以下步骤进行：

### 前端
1. 解压 `project.zip`。
2. 在 `dist` 文件夹内，右键选择“以终端形式打开”。
3. 输入以下命令安装 `serve`：
   ```bash
   npm install -g serve
   ```
4. 运行前端：
   ```bash
   serve -s ./
   ```

### 后端
1. 解压得到 `back` 文件夹。
2. 在 `back` 文件夹内，右键选择“以终端形式打开”。
3. 输入以下命令安装 `pm2`：
   ```bash
   npm install -g pm2
   ```
4. 运行后端：
   ```bash
   pm2 start ./bootstrap.js --name [backend]
   ```




