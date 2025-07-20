import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch('https://mintellect-bnb.onrender.com/api/workflow/archive', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Workflow archive error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to archive workflow' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch('https://mintellect-bnb.onrender.com/api/workflow/archive', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Workflow archive delete error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete archive' },
      { status: 500 }
    );
  }
} 