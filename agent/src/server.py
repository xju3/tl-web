# server.py
import json
import logging
import sys
import os

# Add the parent directory of 'server' to the Python path
# sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from mcp.server.fastmcp import FastMCP
from toolslink.pages import FullModuleGenerator

# Initialize the MCP server
mcp_server = FastMCP("tools-link-js-agent")
logging.basicConfig(level=logging.INFO)

# Calculate the project's root directory based on the script's location
# The project root is two levels up from the directory containing this script (agent/src)
WORK_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

# --- Test Tool ---
@mcp_server.tool()
def greeting_from_js_agent(name: str) -> str:
    """一个用于测试连接的简单工具。"""
    return f"你好, {name}! MCP(js agent) 服务器工作正常。"


@mcp_server.tool()
def generate_full_module(module_name: str, page_name: str) -> str:
    """
    根据指定的模块和页面名称，生成完整的前端模块代码。
    :param module_name: 模块名称 (例如: "Device")
    :param page_name: 页面名称 (例如: "Host")
    :return: 一个包含所有文件操作的 JSON 列表字符串。
    """
    generator = FullModuleGenerator(work_dir=WORK_DIR)
    return generator.generate(module_name, page_name)


@mcp_server.tool()
def test_fetch_openapi() -> str:
    """
    测试第一步：获取并解析 OpenAPI 规范。
    :return: 一个 JSON 字符串，包含测试结果。
    """
    generator = FullModuleGenerator(work_dir=WORK_DIR)
    return generator.test_fetch()


# --- Server Launcher ---
if __name__ == "__main__":
    logging.info("tools-link-js-agent MCP server is starting...")
    mcp_server.run(transport="stdio")
