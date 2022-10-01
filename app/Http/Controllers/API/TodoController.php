<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::all()->toArray();
        return array_reverse($todos);
    }

    public function add(Request $request)
    {
        $todo = new Todo([
            'username' => $request -> username,
            'case' => $request -> case,
            'description' => $request -> description ,
            'status' => $request -> status
        ]);
        $todo->save();
        return response()->json('Successfuly added');
    }

    public function edit($id)
    {
        $todo = Todo::find($id);
        return response()->json($todo);
    }

    public function update($id, Request $request)
    {
        $todo = Todo::find($id);
        $todo->update($request->all());

        return response()->json('Successfully updated');
    }

    public function delete($id)
    {
        $todo = Todo::find($id);
        $todo->delete();

        return response()->json('Successfully deleted');
    }
}
