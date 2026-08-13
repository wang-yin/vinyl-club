import type { Request, Response } from "express";
import prisma from "../lib/prisma.js";

// 取得所有唱片清單
export const getVinyls = async (req: Request, res: Response) => {
  try {
    const vinyls = await prisma.vinyl.findMany();
    res.json({ success: true, data: vinyls });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch vinyls" });
  }
};

// 取得單張唱片詳細資料
export const getVinylById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ success: false, message: "Invalid ID" });
    }
    const vinyl = await prisma.vinyl.findUnique({
      where: { id },
    });

    if (!vinyl) {
      return res
        .status(404)
        .json({ success: false, message: "Vinyl not found" });
    }

    res.json({ success: true, data: vinyl });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch vinyl detail" });
  }
};

// 新增黑膠唱片
export const createVinyl = async (req: Request, res: Response) => {
  try {
    const { title, artist, coverImage, releaseYear, description } = req.body;
    if (!title || !artist || !coverImage || !releaseYear || !description) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }
    const newVinyl = await prisma.vinyl.create({
      data: {
        title,
        artist,
        coverImage,
        releaseYear: Number(releaseYear),
        description,
      },
    });

    res.status(201).json({ success: true, data: newVinyl });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to create vinyl" });
  }
};
